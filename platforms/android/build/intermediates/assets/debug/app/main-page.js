/*
var vmModule = require("./main-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;
*/

var observable = require("data/observable");
var pageModule = require("ui/page");
var viewModel = new observable.Observable();

console.log("ok");

exports.pageLoaded = function(args) {
    var page = args.object;
    viewModel.set("items", [1, 2, 3]);
    page.bindingContext = viewModel;
};

/*
var observable = require("data/observable");
var pageModule = require("ui/page");
var listView = new listViewModule.ListView();
var planets = new observableArray.ObservableArray(["venus", "earth", "jupiter"]);

listView.items = planets;
console.log("on passe");

exports.loaded = function(args) {
    page = args.object;
    planets.set =

    page.bindingContext = pageData;
    view = page.getViewById("L9");

    treesList.empty();

    treesList.load().then(function() {

    });
};

listView.on(listViewModule.ListView.itemLoadingEvent, function (args) {
    if (!args.view) {
        // Create label if it is not already created.
        args.view = new labelModule.Label();
    }
    args.view.text = planets.getItem(args.index);
    indexes[args.index] = true;
});
