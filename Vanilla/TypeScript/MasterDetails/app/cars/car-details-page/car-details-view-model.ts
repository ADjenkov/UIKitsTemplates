import { Car } from "../../shared/models/car";
import { Observable } from 'data/observable';

export class CarDetailsViewModel extends Observable {
    private _car: Car;

    constructor(car: Car) {
        super();

        this._car = car;
    }

    get car(): Car {
        return this._car;
    }
}