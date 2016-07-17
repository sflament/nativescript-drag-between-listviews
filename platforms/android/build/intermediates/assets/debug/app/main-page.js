var observableArray = require("data/observable-array");
var pageModule = require("ui/page");
var viewModel = new observableArray.ObservableArray();
var viewModule = require("ui/core/view");
var gestures = require("ui/gestures");
var absoluteLayout = require("ui/layouts/absolute-layout");

viewModel.set("leftItems", ["1", "2", "e", "4", "f" ]);
viewModel.set("rightItems", ["a", "3", "b", "c", "d", "5", "g", "h", "i", "j"]);

exports.pageLoaded = function(args) {
    var page = args.object;
    viewModel.get("leftItems").push("k");
    viewModel.get("rightItems").push("6");
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
