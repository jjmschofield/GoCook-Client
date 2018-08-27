import {Component} from "react";

export class NavRouteDefinition {
    path: string;
    name: string;
    icon: string;
    enabled: boolean;

    constructor(path: string, name: string, icon: Component, enabled: boolean = false) {
        this.path = path;
        this.name = name;
        this.icon = icon;
        this.enabled = enabled;
    }
}

export default NavRouteDefinition;