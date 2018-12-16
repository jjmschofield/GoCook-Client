import React from "react";
import { withStyles } from "@material-ui/core";

import NAV_ROUTES from "../../routes/NAV_ROUTES";
import { Redirect, Route, Switch } from "react-router";
import { authRestricted } from "../../lib/auth";
import TodayView from "../../routes/today/TodayView";
import RecipesView from "../../routes/recipes/RecipesView";
import PlansView from "../../routes/plans/PlansView";
import LoginCallbackView from "../../routes/login/LoginCallbackView";

const styles = {
    view: {
        padding: "0 24px"
    }
};

const MainView = ({ auth, classes }) => {
    return (
        <div className={classes.view}>
            <Switch>
                <Route path={NAV_ROUTES.TODAY.path} component={authRestricted(TodayView, auth)}/>
                <Route path={NAV_ROUTES.RECIPES.path} component={authRestricted(RecipesView, auth)}/>
                <Route path={NAV_ROUTES.PLANS.path} component={authRestricted(PlansView, auth)}/>
                <Route path={NAV_ROUTES.LOGIN_CALLBACK.path}
                       render={(props) => <LoginCallbackView auth={auth} {...props} />}/>
                <Redirect to={NAV_ROUTES.TODAY.path}/>
            </Switch>
        </div>
    )
};

export default withStyles(styles)(MainView);