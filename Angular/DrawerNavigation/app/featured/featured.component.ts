import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "ns-featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
})
export class FeaturedComponent implements OnInit {
    @ViewChild("drawer") public drawerComponent: RadSideDrawerComponent;

    constructor() {

    }

    ngOnInit(): void {

    }

    openDrawer(): void {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    }
}
