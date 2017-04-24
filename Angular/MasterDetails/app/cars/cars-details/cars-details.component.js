"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/map");
var cars_service_1 = require("../shared/cars.service");
var CarsDetailsComponent = (function () {
    function CarsDetailsComponent(carsService, pageRoute, routerExtensions) {
        this.carsService = carsService;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
    }
    CarsDetailsComponent.prototype.ngOnInit = function () {
        var carId = "";
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            carId = params['id'];
        });
        this._car = this.carsService.getCarById(carId);
    };
    Object.defineProperty(CarsDetailsComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    CarsDetailsComponent.prototype.onGoBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return CarsDetailsComponent;
}());
CarsDetailsComponent = __decorate([
    core_1.Component({
        selector: "ns-cars-details",
        moduleId: module.id,
        templateUrl: "./cars-details.component.html",
    }),
    __metadata("design:paramtypes", [cars_service_1.CarsService,
        router_1.PageRoute,
        router_1.RouterExtensions])
], CarsDetailsComponent);
exports.CarsDetailsComponent = CarsDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnMtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzREFBMEU7QUFJMUUsaUNBQStCO0FBRS9CLHVEQUFxRDtBQVFyRCxJQUFhLG9CQUFvQjtJQUc3Qiw4QkFDWSxXQUF3QixFQUN4QixTQUFvQixFQUNwQixnQkFBa0M7UUFGbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRzlDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWYsMERBQTBEO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0JBQUkscUNBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksb0JBQW9CO0lBTGhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsK0JBQStCO0tBQy9DLENBQUM7cUNBSzJCLDBCQUFXO1FBQ2Isa0JBQVM7UUFDRix5QkFBZ0I7R0FOckMsb0JBQW9CLENBK0JoQztBQS9CWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBDYXJzU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2Fycy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vc2hhcmVkL2Nhci5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1jYXJzLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2Fycy1kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIENhcnNEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9jYXI6IENhcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNhcnNTZXJ2aWNlOiBDYXJzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNhcklkID0gXCJcIjtcblxuICAgICAgICAvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYXJJZCA9IHBhcmFtc1snaWQnXTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2NhciA9IHRoaXMuY2Fyc1NlcnZpY2UuZ2V0Q2FyQnlJZChjYXJJZCk7XG4gICAgfVxuXG4gICAgZ2V0IGNhcigpOiBDYXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyO1xuICAgIH1cblxuICAgIG9uR29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxufVxuIl19