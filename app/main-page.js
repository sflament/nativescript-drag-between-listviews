var observableArray = require("data/observable-array");
var pageModule = require("ui/page");
var viewModel = new observableArray.ObservableArray();
var viewModule = require("ui/core/view");
var gestures = require("ui/gestures");
var absoluteLayout = require("ui/layouts/absolute-layout");
var listViewModule = require("nativescript-telerik-ui/listview");

viewModel.set("leftItems", [{value:"1"},{ value:"2"}, {value:"e"}, {value:"4"}, {value:"f"}]);
viewModel.set("rightItems", [{value:"a"},{ value:"3"}, {value:"b"}, {value:"c"}, {value:"d"}, {value:"5"},{ value:"g"}, {value:"h"}, {value:"i"}, {value:"j"}]);

exports.pageLoaded = function(args) {
    var page = args.object;
    viewModel.get("leftItems").push({val:"k"}); 
    viewModel.get("rightItems").push({val:"6"});
    page.bindingContext = viewModel;

/*
    var dragLabel = viewModule.getViewById(page, "dragLabel");
    absoluteLayout.AbsoluteLayout.setLeft(dragLabel,50);
    absoluteLayout.AbsoluteLayout.setTop(dragLabel,50);
*/
};

/*
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
*/

exports.onItemReordered = function(args){
console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
}

exports.onItemReorderStart = function(args){
    console.log("Item reorder starting");
}