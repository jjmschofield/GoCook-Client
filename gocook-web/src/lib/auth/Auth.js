import auth0 from 'auth0-js';

export default class Auth {
    accessToken: string;
    idToken: string;
    expiresAt: number;

    auth0 = new auth0.WebAuth({
        domain: 'jjmschofield.eu.auth0.com',
        clientID: '2mrPi0oy9a9yqdlsVwaY3V8erCgEo5Fu',
        audience: 'https://go-cook',
        redirectUri: `${getHost()}/login/callback`,
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLoginCallback = this.handleLoginCallback.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.renewSession = this.renewSession.bind(this);
        this.loadState();
    }

    login() {
        this.auth0.authorize();
    }

    logout() {
        this.accessToken = null;
        this.idToken = null;
        this.expiresAt = 0;
        this.saveState();
    }

    isAuthenticated() {
        return this.accessToken && this.idToken && !this.sessionExpired();
    }

    sessionExpired() {
        return new Date().getTime() > this.expiresAt;
    }

    async getAccessToken() {
        if (!this.sessionExpired()) {
            return this.accessToken;
        }

        await this.renewSession();
        return this.accessToken;
    }

    async getIdToken() {
        if (!this.sessionExpired()) {
            return this.idToken;
        }

        await this.renewSession();
        return this.idToken;
    }

    setSession(authResult) {
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.saveState();
    }

    async handleLoginCallback() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve(authResult);
                } else if (err) {
                    reject(err);
                }
            });
        });
    }

    async renewSession() {
        return new Promise((resolve, reject) => {
            this.auth0.checkSession({}, (error, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve(authResult)
                } else if (error) {
                    this.logout();
                    reject(error)
                }
            });
        });
    }

    saveState() {
        localStorage.setItem('auth_access_token', this.accessToken);
        localStorage.setItem('auth_id_token', this.idToken);
        localStorage.setItem('auth_expires', this.expiresAt);
    }

    loadState() {
        this.accessToken = localStorage.getItem('auth_access_token');
        this.idToken = localStorage.getItem('auth_id_token');
        this.expiresAt = localStorage.getItem('auth_expires');
    }
}

const getHost = () => {
    return `${window.location.protocol}//${window.location.hostname}${(window.location.port ? ':' + window.location.port : '')}`;
};