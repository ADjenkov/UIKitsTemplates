"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../../shared/config");
var car_model_1 = require("./car.model");
var CarsService = (function () {
    function CarsService(http) {
        this.http = http;
        this._cars = [];
    }
    CarsService.prototype.getCarById = function (id) {
        if (!id) {
            return;
        }
        return this._cars.filter(function (car) {
            return car.id == id;
        })[0];
    };
    CarsService.prototype.load = function () {
        var _this = this;
        return this.http.get(config_1.Config.apiUrl + "Cars")
            .map(function (res) { return res.json(); })
            .map(function (data) {
            data.Result.forEach(function (carJson) {
                var car = new car_model_1.Car(carJson);
                _this._cars.push(car);
            });
            return _this._cars;
        })
            .catch(this.handleErrors);
    };
    CarsService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return CarsService;
}());
CarsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2Fycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0IsOENBQTZDO0FBQzdDLHlDQUFrQztBQUdsQyxJQUFhLFdBQVc7SUFHcEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxnQ0FBVSxHQUFqQixVQUFrQixFQUFVO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQUEsaUJBWUM7UUFYRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDdkMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxJQUFTO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLGVBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyxrQ0FBWSxHQUFwQixVQUFxQixLQUFlO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUlpQixXQUFJO0dBSHJCLFdBQVcsQ0FtQ3ZCO0FBbkNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXIubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhcnNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2NhcnM6IENhcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuX2NhcnMgPSBbXTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhckJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnMuZmlsdGVyKChjYXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhci5pZCA9PSBpZDtcclxuICAgICAgICB9KVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCJDYXJzXCIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLm1hcCgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLlJlc3VsdC5mb3JFYWNoKChjYXJKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhciA9IG5ldyBDYXIoY2FySnNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2Fycy5wdXNoKGNhcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FycztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=