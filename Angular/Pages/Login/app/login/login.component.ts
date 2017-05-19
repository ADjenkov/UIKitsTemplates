import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import * as Facebook from "nativescript-facebook";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    static that: LoginComponent;

    constructor(private routerExtensions: RouterExtensions) {
        LoginComponent.that = this;
    }

    ngOnInit(): void {
    }

    onLoginFacebook(error: string, loginResponse: Facebook.LoginResponse) {
        if (!error && loginResponse) {
            LoginComponent.that.routerExtensions.navigate(["/home"], { clearHistory: true });
        }
    }

    onSignIn() {
    }
}
