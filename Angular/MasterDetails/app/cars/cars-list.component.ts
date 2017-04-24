import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Http } from "@angular/http";
import { ObservableArray } from 'data/observable-array';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../shared/config";
import { CarsService } from "./shared/cars.service";
import { Car } from "./shared/car.model";

@Component({
    selector: "ns-cars-list",
    moduleId: module.id,
    templateUrl: "./cars-list.component.html",
})
export class CarsListComponent implements OnInit {
    private _isLoading: boolean;
    private _cars: ObservableArray<Car>;

    constructor(
        private carsService: CarsService,
        private routerExtensions: RouterExtensions
    ) {
        // Initialize default values.
        this._cars = new ObservableArray<Car>([]);
        this._isLoading = false;
    }

    ngOnInit(): void {
        this.carsService.load()
            .subscribe((cars: Car[]) => {
                this._cars = new ObservableArray(cars);
            });
    }

    get cars(): ObservableArray<Car> {
        return this._cars;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    set isLoading(value: boolean) {
        if (this._isLoading !== value) {
            this._isLoading = value;
        }
    }

    public onCarItemTap(args) {
        var tappedCarItem = args.view.bindingContext;

        this.routerExtensions.navigate(["/cars-details", tappedCarItem.id]);
    }
}
