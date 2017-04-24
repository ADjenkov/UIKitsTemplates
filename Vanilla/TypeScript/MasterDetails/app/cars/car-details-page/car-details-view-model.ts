import { Car } from "../../shared/models/car";
import { Observable } from 'data/observable';

export class CarDetailsViewModel extends Observable {
    private _carModel: Car;

    constructor(carModel: Car) {
        super();

        this._carModel = carModel;
    }

    get carModel(): Car {
        return this._carModel;
    }
}