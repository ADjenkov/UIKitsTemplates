import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }
}
