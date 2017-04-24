var Observable = require("data/observable").Observable;

function CarDetailsViewModel(carModel) {
    var viewModel = new Observable();

    viewModel.car = carModel;

    return viewModel;
}

module.exports = CarDetailsViewModel;