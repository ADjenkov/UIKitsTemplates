import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { Http } from "@angular/http";
import { ObservableArray } from 'data/observable-array';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { CarsService } from "../shared/cars.service";
import { Car } from "../shared/car.model";

@Component({
    selector: "ns-cars-details",
    moduleId: module.id,
    templateUrl: "./cars-details.component.html",
})
export class CarsDetailsComponent implements OnInit {
    private _car: Car;

    constructor(
        private carsService: CarsService,
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions
    ) {

    }

    ngOnInit(): void {
        let carId = "";

        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => {
                carId = params['id'];
            });

        this._car = this.carsService.getCarById(carId);
    }

    get car(): Car {
        return this._car;
    }

    onGoBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
