"use strict";
var observable_1 = require("data/observable");
var CarDetailsViewModel = (function (_super) {
    __extends(CarDetailsViewModel, _super);
    function CarDetailsViewModel(carModel) {
        var _this = _super.call(this) || this;
        _this._carModel = carModel;
        return _this;
    }
    Object.defineProperty(CarDetailsViewModel.prototype, "carModel", {
        get: function () {
            return this._carModel;
        },
        enumerable: true,
        configurable: true
    });
    return CarDetailsViewModel;
}(observable_1.Observable));
exports.CarDetailsViewModel = CarDetailsViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbHMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci1kZXRhaWxzLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhDQUE2QztBQUU3QztJQUF5Qyx1Q0FBVTtJQUcvQyw2QkFBWSxRQUFhO1FBQXpCLFlBQ0ksaUJBQU8sU0FHVjtRQURHLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDOztJQUM5QixDQUFDO0lBRUQsc0JBQUkseUNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBeUMsdUJBQVUsR0FZbEQ7QUFaWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9jYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgQ2FyRGV0YWlsc1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2Nhck1vZGVsOiBDYXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXJNb2RlbDogQ2FyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fY2FyTW9kZWwgPSBjYXJNb2RlbDtcbiAgICB9XG5cbiAgICBnZXQgY2FyTW9kZWwoKTogQ2FyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhck1vZGVsO1xuICAgIH1cbn0iXX0=