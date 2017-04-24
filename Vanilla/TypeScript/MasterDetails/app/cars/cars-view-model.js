"use strict";
var car_1 = require("../shared/models/car");
var config_1 = require("../shared/config");
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var CarsViewModel = (function (_super) {
    __extends(CarsViewModel, _super);
    function CarsViewModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._cars = new observable_array_1.ObservableArray([]);
        _this._isLoading = false;
        return _this;
    }
    Object.defineProperty(CarsViewModel.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarsViewModel.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            if (this._isLoading !== value) {
                this._isLoading = value;
                this.notifyPropertyChange('isLoading', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    CarsViewModel.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        fetch(config_1.Config.apiUrl + "Cars")
            .then(this.handleErrors)
            .then(function (response) {
            return response.json();
        }).then(function (data) {
            data.Result.forEach(function (carJson) {
                console.log(carJson.Name);
                _this._cars.push(new car_1.Car(carJson));
            });
            _this.isLoading = false;
        });
    };
    CarsViewModel.prototype.empty = function () {
        while (this._cars.length) {
            this._cars.pop();
        }
    };
    CarsViewModel.prototype.handleErrors = function (response) {
        if (!response.ok) {
            console.log(JSON.stringify(response));
            throw Error(response.statusText);
        }
        return response;
    };
    return CarsViewModel;
}(observable_1.Observable));
exports.CarsViewModel = CarsViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2Fycy12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBMkM7QUFDM0MsMkNBQTBDO0FBQzFDLDhDQUE2QztBQUM3QywwREFBd0Q7QUFFeEQ7SUFBbUMsaUNBQVU7SUFJekM7UUFBQSxZQUNJLGlCQUFPLFNBS1Y7UUFIRyw2QkFBNkI7UUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDMUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7O0lBQzVCLENBQUM7SUFFRCxzQkFBSSwrQkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWMsS0FBYztZQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2pELENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVNELDRCQUFJLEdBQUo7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLEtBQUssQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksU0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFTyxvQ0FBWSxHQUFwQixVQUFxQixRQUFRO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXpERCxDQUFtQyx1QkFBVSxHQXlENUM7QUF6RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9jYXJcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9zaGFyZWQvY29uZmlnXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5cbmV4cG9ydCBjbGFzcyBDYXJzVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2NhcnM6IE9ic2VydmFibGVBcnJheTxDYXI+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5fY2FycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2FyPihbXSk7XG4gICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBjYXJzKCk6IE9ic2VydmFibGVBcnJheTxDYXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnM7XG4gICAgfVxuXG4gICAgZ2V0IGlzTG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9hZGluZztcbiAgICB9XG5cbiAgICBzZXQgaXNMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmcgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2lzTG9hZGluZycsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGZldGNoKENvbmZpZy5hcGlVcmwgKyBcIkNhcnNcIilcbiAgICAgICAgICAgIC50aGVuKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEuUmVzdWx0LmZvckVhY2goKGNhckpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FySnNvbi5OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2Fycy5wdXNoKG5ldyBDYXIoY2FySnNvbikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVtcHR5KCkge1xuICAgICAgICB3aGlsZSAodGhpcy5fY2Fycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhcnMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9ycyhyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn0iXX0=