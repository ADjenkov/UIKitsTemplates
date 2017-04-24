import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "ns-search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
})
export class SearchComponent implements OnInit {
    @ViewChild("drawer") public drawerComponent: RadSideDrawerComponent;

    constructor() {

    }

    ngOnInit(): void {

    }

    openDrawer(): void {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    }
}
