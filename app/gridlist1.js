var pages = require("ui/page");
var frameModule = require("ui/frame");
var viewsModule = require("../../shared/utils/views");
var msgModule = require("../../shared/utils/message-fr");

var TreesListViewModel = require("../../shared/view-models/trees-list-view-model");
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var observableArrayModule = require("data/observable-array");
var viewModule = require("ui/core/view");
var toast = require("nativescript-toast");
var animation = require("ui/animation");
var LabelModule = require("ui/label");

var treesList = new TreesListViewModel([]);
var pageData = new observableModule.Observable({
    treesList: treesList,
    trees: ""
});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
    view = page.getViewById("L9");

    treesList.empty();
    pageData.set("isLoading", true);
    treesList.load().then(function() {
    pageData.set("isLoading", false);
    });
};

exports.add = function() {
    // Check for empty submissions
    if (pageData.get("trees").trim() !== "") {
        // Dismiss the keyboard
        viewModule.getViewById(page, "trees").dismissSoftInput();
        treesList.add(pageData.get("trees"))
            .catch(function() {
                dialogsModule.alert({
                    message: "An error occurred while adding an item to your list.",
                    okButtonText: "OK"
                });
            });
        // Empty the input field
        pageData.set("trees", "");
    } else {
        dialogsModule.alert({
            message: "Enter a new tree item.",
            okButtonText: "OK"
        });
    }
};

exports.delete = function(args) {
      var item = args.view.bindingContext;
      var index = treesList.indexOf(item);
      treesList.delete(index);
      toast.makeText("Item supprimé").show();
};


//http://stackoverflow.com/questions/32325991/use-drag-n-drop-in-nativescript

exports.L9move = function(args) {
    var view = args.view;
    var left = args.view._getCurrentLayoutBounds().left;
    var top = args.view._getCurrentLayoutBounds().top;
    var right = args.view._getCurrentLayoutBounds().right;
    var bottom = args.view._getCurrentLayoutBounds().bottom;
    var X = args.deltaX;
    var Y = args.deltaY;

    console.log("left: " + left + " top : " + top + " right : " + right + " bottom : " + bottom + ";");
    console.log("Pan deltaX:" + X + "; deltaY:" + Y + ";");
    view.animate({ translate: { x: args.deltaX , y: args.deltaY } });
    left = left + X;
    right = right + X;
    top = top + Y;
    bottom= bottom + Y;
    console.log("left: " + left + " top : " + top + " right : " + right + " bottom : " + bottom + ";");
    args.view._setCurrentLayoutBounds(left, top, right, bottom);
    console.log("------------------");
};

exports.L9reset = function(args) {
// ne marche pas car view est local et fait donc référence à L10 et navigation a l9
  var view = args.view;
  view.translateX = 0;
      view.translateY = 0;
      view.scaleX = 1;
      view.scaleY = 1;
      view.rotate = 0;
};

exports.Z2move = function(args) {
  var view = args.view;
  view.animate({ opacity: 0 })
      .then(function () { return view.animate({ opacity: 1, duration : 3000  }); })
      .then(function () { return view.animate({ translate: { x: 100, y: 100 }, duration : 3000 }); })
      .then(function () { return view.animate({ translate: { x: 0, y: 0 } , duration : 3000 }); })
      .then(function () { return view.animate({ scale: { x: 3, y: 3 } , duration : 3000 }); })
      .then(function () { return view.animate({ scale: { x: 1, y: 1 }, duration : 3000  }); })
      .then(function () { return view.animate({ rotate: 180, duration : 3000  }); })
      .then(function () { return view.animate({ rotate: 0 , duration : 3000 }); })
      .then(function () {
      console.log("Animation finished");
  })
      .catch(function (e) {
      console.log(e.message);
  });
};

exports.Z2reset = function(args) {
  var view = args.view;
      view.translateX = 0;
      view.translateY = 0;
      view.scaleX = 1;
      view.scaleY = 1;
      view.rotate = 0;
};
