"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/map");
var cars_service_1 = require("../shared/cars.service");
var CarDetailComponent = (function () {
    function CarDetailComponent(carsService, pageRoute, routerExtensions) {
        this.carsService = carsService;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var carId = "";
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            carId = params['id'];
        });
        this._car = this.carsService.getCarById(carId);
    };
    Object.defineProperty(CarDetailComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    CarDetailComponent.prototype.onGoBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return CarDetailComponent;
}());
CarDetailComponent = __decorate([
    core_1.Component({
        selector: "CarDetail",
        moduleId: module.id,
        templateUrl: "./car-detail.component.html",
    }),
    __metadata("design:paramtypes", [cars_service_1.CarsService,
        router_1.PageRoute,
        router_1.RouterExtensions])
], CarDetailComponent);
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUkxRSxpQ0FBK0I7QUFFL0IsdURBQXFEO0FBUXJELElBQWEsa0JBQWtCO0lBRzNCLDRCQUNZLFdBQXdCLEVBQ3hCLFNBQW9CLEVBQ3BCLGdCQUFrQztRQUZsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFHOUMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZiwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQkFBSSxtQ0FBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNkJBQTZCO0tBQzdDLENBQUM7cUNBSzJCLDBCQUFXO1FBQ2Isa0JBQVM7UUFDRix5QkFBZ0I7R0FOckMsa0JBQWtCLENBK0I5QjtBQS9CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbmltcG9ydCB7IENhcnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXIubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ2FyRGV0YWlsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXItZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfY2FyOiBDYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjYXJzU2VydmljZTogQ2Fyc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2FySWQgPSBcIlwiO1xyXG5cclxuICAgICAgICAvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcklkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FyID0gdGhpcy5jYXJzU2VydmljZS5nZXRDYXJCeUlkKGNhcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FyKCk6IENhciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcjtcclxuICAgIH1cclxuXHJcbiAgICBvbkdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19