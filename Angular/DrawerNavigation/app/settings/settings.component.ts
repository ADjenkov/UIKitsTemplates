import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "ns-settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
    @ViewChild("drawer") public drawerComponent: RadSideDrawerComponent;

    constructor() {

    }

    ngOnInit(): void {

    }

    openDrawer(): void {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    }
}
