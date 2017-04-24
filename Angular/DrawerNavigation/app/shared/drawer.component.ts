import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "MyDrawer",
    moduleId: module.id,
    templateUrl: "./drawer.component.html",
})
export class DrawerComponent implements OnInit {
    items: any = [
        {
            title: "Home",
            route: "/home"
        },
        {
            title: "Browse",
            route: "/browse"
        },
        {
            title: "Search",
            route: "/search"
        },
        {
            title: "Featured",
            route: "/featured"
        },
        {
            title: "Settings",
            route: "/settings"
        }
    ]

    constructor(private routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {

    }

    navigateToRoute(route:string): void {
        this.routerExtensions.navigate([route]);
    }
}
