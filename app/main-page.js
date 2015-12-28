var observableArray = require("data/observable-array");
var pageModule = require("ui/page");
var viewModel = new observableArray.ObservableArray();
var viewModule = require("ui/core/view");
var gestures = require("ui/gestures");
var absoluteLayout = require("ui/layouts/absolute-layout");

viewModel.set("leftItems", [1, 2, 3, 4, 5 ]);
viewModel.set("rightItems", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);

exports.pageLoaded = function(args) {
    var page = args.object;
    viewModel.get("leftItems").push(6);
    viewModel.get("rightItems").push("k");
    page.bindingContext = viewModel;

    var dragLabel = viewModule.getViewById(page, "dragLabel");
    absoluteLayout.AbsoluteLayout.setLeft(dragLabel,50);
    absoluteLayout.AbsoluteLayout.setTop(dragLabel,50);
};

exports.dragit = function(args) {
  var view = args.view;
  var dragLabel = viewModule.getViewById(view.page, "dragLabel");
  dragLabel.visibility ="visible";
  dragLabel.text= "moving";

  var X = args.deltaX;
  var Y = args.deltaY;
  var left = absoluteLayout.AbsoluteLayout.getLeft(view);
  var top = absoluteLayout.AbsoluteLayout.getTop(view);
  absoluteLayout.AbsoluteLayout.setLeft(dragLabel,left+X);
  absoluteLayout.AbsoluteLayout.setTop(dragLabel,top+Y);

  console.log("dragit" + X + " " + Y);
  console.log("coord [" + top + " - " + top + "]");
};
