var geolocation = require("nativescript-geolocation");
var fs = require("file-system");
var frame = require("ui/frame");
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(ViewModel.prototype, "locations", {
        get: function () {
            if (!this._locations) {
                this._locations = new observable_array_1.ObservableArray();
            }
            return this._locations;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(ViewModel.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function(value) {
            if (this._status !== value) {
                this._status = value;
                this.notifyPropertyChange("status", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return ViewModel;
})(observable_1.Observable);
exports.ViewModel = ViewModel;

var page;
var model = new ViewModel();

function pageLoaded(args) {
	page = args.object;
	page.bindingContext = model;
}
exports.pageLoaded = pageLoaded;

function buttonGetLocationTap(args) {
	//geolocation.enableLocationRequest();
	var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
	then(function(loc) {
		if (loc) {
			model.locations.push(loc);
		}
	}, function(e){
		console.log("Error: " + e.message);
	});
}
exports.buttonGetLocationTap = buttonGetLocationTap;

var watchId;

function buttonStartTap(agrs) {
	watchId = geolocation.watchLocation(
	function (loc) {
		if (loc) {
			model.locations.push(loc);
		}
	}, 
	function(e){
		console.log("Error: " + e.message);
	}, 
	{desiredAccuracy: 3, updateDistance: 10, updateTime: 1000 * 60});
}
exports.buttonStartTap = buttonStartTap;

function buttonStopTap(agrs) {
	if (watchId) {
		geolocation.clearWatch(watchId);
	}
}
exports.buttonStopTap = buttonStopTap;

function exportData(agrs) {
    // TODO create file with the logged locations
    var documentsPath = fs.knownFolders.temp();
    var locationsPath = "locations.txt";
    var normalizedPath = fs.path.normalize(documentsPath + locationsPath);

    var locationsFile = fs.File.fromPath(normalizedPath);
    var locationsData = "";
    var i;
    for(i = 0; i < modal.locations.length; i++) {
        locationsData += modal.locations.getItem(i).latitude + ", " + modal.locations.getItem(i).longitude + "\r\n";
    }

    locationsFile.write(locationsData).then(
        function () {
            model.status = "Export OK";
        },
        function (error) {
            model.status = error;
        }
    );
}
exports.exportData = exportData;

function showOnMap(args) {
    var topmost = frame.topmost();
    var mapPageModel = new observable_1.Observable({location: model.locations.getItem(model.locations.length - 1)});
    topmost.navigate({
        moduleName: "views/mapPage",
        context: mapPageModel
    });
}
exports.showOnMap = showOnMap;
