import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../../shared/config";
import { Car } from "./car.model";

@Injectable()
export class CarsService {
    private _cars: Car[];

    constructor(private http: Http) {
        this._cars = []; 
    }

    public getCarById(id: string) {
        if (!id) {
            return;
        }

        return this._cars.filter((car) => {
            return car.id == id;
        })[0];
    }

    public load() {
        return this.http.get(Config.apiUrl + "Cars")
            .map((res) => res.json())
            .map((data: any) => {
                data.Result.forEach((carJson) => {
                    let car = new Car(carJson);
                    this._cars.push(car);
                });

                return this._cars;
            })
            .catch(this.handleErrors);
    }

    private handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}