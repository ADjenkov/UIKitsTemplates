var Observable = require("data/observable").Observable;

function CarDetailsViewModel(carModel) {
    var viewModel = new Observable();

    viewModel.carModel = carModel;

    return viewModel;
}

module.exports = CarDetailsViewModel;