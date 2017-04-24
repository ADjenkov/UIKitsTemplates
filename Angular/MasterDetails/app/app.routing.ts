import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CarsListComponent } from "./cars/cars-list.component";
import { CarsDetailsComponent } from "./cars/cars-details/cars-details.component";

const routes: Routes = [
    { path: "", redirectTo: "/cars", pathMatch: "full" },
    { path: "cars", component: CarsListComponent },
    { path: "cars-details/:id", component: CarsDetailsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }