import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";

import { CarsService } from "./cars/shared/cars.service";
import { CarsListComponent } from "./cars/cars-list.component";
import { CarDetailComponent } from "./cars/car-detail/car-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        CarsListComponent,
        CarDetailComponent
    ],
    providers: [
        CarsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
