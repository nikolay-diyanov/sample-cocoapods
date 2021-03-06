var vmModule = require("./main-view-model");
var platform = require("platform");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}

function creatingView(args) {
	if (platform.device.os == "iOS") {
		var spinnerView = MMMaterialDesignSpinner.alloc().initWithFrame(CGRectMake(0,0,40,40));
    	spinnerView.lineWidth = 3.5;
    	spinnerView.tintColor = UIColor.colorWithRedGreenBlueAlpha(61/255, 90/255, 254/255, 1);

    	spinnerView.startAnimating();
    	args.view = spinnerView;
	}
}

exports.creatingView = creatingView;
exports.pageLoaded = pageLoaded;
