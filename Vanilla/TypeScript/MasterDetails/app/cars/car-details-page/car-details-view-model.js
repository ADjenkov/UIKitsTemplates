"use strict";
var observable_1 = require("data/observable");
var CarDetailsViewModel = (function (_super) {
    __extends(CarDetailsViewModel, _super);
    function CarDetailsViewModel(car) {
        var _this = _super.call(this) || this;
        _this._car = car;
        return _this;
    }
    Object.defineProperty(CarDetailsViewModel.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    return CarDetailsViewModel;
}(observable_1.Observable));
exports.CarDetailsViewModel = CarDetailsViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbHMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci1kZXRhaWxzLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhDQUE2QztBQUU3QztJQUF5Qyx1Q0FBVTtJQUcvQyw2QkFBWSxHQUFRO1FBQXBCLFlBQ0ksaUJBQU8sU0FHVjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDOztJQUNwQixDQUFDO0lBRUQsc0JBQUksb0NBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBeUMsdUJBQVUsR0FZbEQ7QUFaWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9jYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgQ2FyRGV0YWlsc1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2NhcjogQ2FyO1xuXG4gICAgY29uc3RydWN0b3IoY2FyOiBDYXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9jYXIgPSBjYXI7XG4gICAgfVxuXG4gICAgZ2V0IGNhcigpOiBDYXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyO1xuICAgIH1cbn0iXX0=