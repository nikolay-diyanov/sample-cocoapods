var vmModule = require("./main-view-model");
var platform = require("platform");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}

function crView(args) {

	if (platform.device.os = "iOS") {
		var spinnerView = MMMaterialDesignSpinner.alloc().initWithFrame(CGRectMake(0,0,40,40));
    	spinnerView.lineWidth = 1.5;
    	spinnerView.tintColor = UIColor.redColor();

    	spinnerView.startAnimating();
    	args.view = spinnerView;
	}
}

exports.crView = crView;
exports.pageLoaded = pageLoaded;
