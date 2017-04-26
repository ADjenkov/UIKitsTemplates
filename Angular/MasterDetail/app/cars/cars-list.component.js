"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var observable_array_1 = require("data/observable-array");
require("rxjs/add/operator/map");
var cars_service_1 = require("./shared/cars.service");
var CarsListComponent = (function () {
    function CarsListComponent(carsService, routerExtensions) {
        this.carsService = carsService;
        this.routerExtensions = routerExtensions;
        // Initialize default values.
        this._cars = new observable_array_1.ObservableArray([]);
        this._isLoading = false;
    }
    CarsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carsService.load()
            .subscribe(function (cars) {
            _this._cars = new observable_array_1.ObservableArray(cars);
        });
    };
    Object.defineProperty(CarsListComponent.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarsListComponent.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            if (this._isLoading !== value) {
                this._isLoading = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    CarsListComponent.prototype.onCarItemTap = function (args) {
        var tappedCarItem = args.view.bindingContext;
        this.routerExtensions.navigate(["/car-detail", tappedCarItem.id]);
    };
    return CarsListComponent;
}());
CarsListComponent = __decorate([
    core_1.Component({
        selector: "CarsList",
        moduleId: module.id,
        templateUrl: "./cars-list.component.html",
    }),
    __metadata("design:paramtypes", [cars_service_1.CarsService,
        router_1.RouterExtensions])
], CarsListComponent);
exports.CarsListComponent = CarsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0QsMERBQXdEO0FBRXhELGlDQUErQjtBQUcvQixzREFBb0Q7QUFRcEQsSUFBYSxpQkFBaUI7SUFJMUIsMkJBQ1ksV0FBd0IsRUFDeEIsZ0JBQWtDO1FBRGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTthQUNsQixTQUFTLENBQUMsVUFBQyxJQUFXO1lBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHNCQUFJLG1DQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBYyxLQUFjO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztRQUNMLENBQUM7OztPQU5BO0lBUU0sd0NBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDO3FDQU0yQiwwQkFBVztRQUNOLHlCQUFnQjtHQU5yQyxpQkFBaUIsQ0F1QzdCO0FBdkNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9zaGFyZWQvY29uZmlnXCI7XHJcbmltcG9ydCB7IENhcnNTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2NhcnMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9zaGFyZWQvY2FyLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNhcnNMaXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXJzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcnNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2NhcnM6IE9ic2VydmFibGVBcnJheTxDYXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY2Fyc1NlcnZpY2U6IENhcnNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cclxuICAgICAgICB0aGlzLl9jYXJzID0gbmV3IE9ic2VydmFibGVBcnJheTxDYXI+KFtdKTtcclxuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcnNTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChjYXJzOiBDYXJbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoY2Fycyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXJzKCk6IE9ic2VydmFibGVBcnJheTxDYXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FycztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmcgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DYXJJdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICB2YXIgdGFwcGVkQ2FySXRlbSA9IGFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dDtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jYXItZGV0YWlsXCIsIHRhcHBlZENhckl0ZW0uaWRdKTtcclxuICAgIH1cclxufVxyXG4iXX0=