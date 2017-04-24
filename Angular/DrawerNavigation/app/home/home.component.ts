import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    @ViewChild("drawer") public drawerComponent: RadSideDrawerComponent;

    constructor() {

    }

    ngOnInit(): void {

    }

    openDrawer(): void {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    }
}
