import {Component} from "react";

export class NavRouteDefinition {
    path: string;
    name: string;
    icon: string;

    constructor(path: string, name: string, icon: Component) {
        this.path = path;
        this.name = name;
        this.icon = icon;
    }
}

export default NavRouteDefinition;