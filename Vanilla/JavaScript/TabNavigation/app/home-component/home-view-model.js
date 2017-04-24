var Observable = require("data/observable").Observable;

function Home(info) {
    // You can add properties to observables on creation
    var viewModel = new Observable();

    return viewModel;
}

module.exports = Home;