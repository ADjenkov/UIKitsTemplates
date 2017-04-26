import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CarsListComponent } from "./cars/cars-list.component";
import { CarDetailComponent } from "./cars/car-detail/car-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/cars", pathMatch: "full" },
    { path: "cars", component: CarsListComponent },
    { path: "car-detail/:id", component: CarDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }