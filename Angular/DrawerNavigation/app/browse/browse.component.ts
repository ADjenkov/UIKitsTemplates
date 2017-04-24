import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "ns-browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
})
export class BrowseComponent implements OnInit {
    @ViewChild("drawer") public drawerComponent: RadSideDrawerComponent;

    constructor() {

    }

    ngOnInit(): void {

    }

    openDrawer(): void {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    }
}
