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
        this.routerExtensions.navigate(["/cars-details", tappedCarItem.id]);
    };
    return CarsListComponent;
}());
CarsListComponent = __decorate([
    core_1.Component({
        selector: "ns-cars-list",
        moduleId: module.id,
        templateUrl: "./cars-list.component.html",
    }),
    __metadata("design:paramtypes", [cars_service_1.CarsService,
        router_1.RouterExtensions])
], CarsListComponent);
exports.CarsListComponent = CarsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0QsMERBQXdEO0FBRXhELGlDQUErQjtBQUcvQixzREFBb0Q7QUFRcEQsSUFBYSxpQkFBaUI7SUFJMUIsMkJBQ1ksV0FBd0IsRUFDeEIsZ0JBQWtDO1FBRGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTthQUNsQixTQUFTLENBQUMsVUFBQyxJQUFXO1lBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHNCQUFJLG1DQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBYyxLQUFjO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztRQUNMLENBQUM7OztPQU5BO0lBUU0sd0NBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDO3FDQU0yQiwwQkFBVztRQUNOLHlCQUFnQjtHQU5yQyxpQkFBaUIsQ0F1QzdCO0FBdkNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbmZpZ1wiO1xuaW1wb3J0IHsgQ2Fyc1NlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvY2Fycy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9zaGFyZWQvY2FyLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWNhcnMtbGlzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXJzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9jYXJzOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNhcnNTZXJ2aWNlOiBDYXJzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuX2NhcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENhcj4oW10pO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXJzU2VydmljZS5sb2FkKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGNhcnM6IENhcltdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoY2Fycyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgY2FycygpOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJzO1xuICAgIH1cblxuICAgIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XG4gICAgfVxuXG4gICAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DYXJJdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgdmFyIHRhcHBlZENhckl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jYXJzLWRldGFpbHNcIiwgdGFwcGVkQ2FySXRlbS5pZF0pO1xuICAgIH1cbn1cbiJdfQ==