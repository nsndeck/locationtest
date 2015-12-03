var geolocation = require("nativescript-geolocation");

function onNavigatedTo(args) {
    args.object.bindingContext = args.context;
}
exports.onNavigatedTo = onNavigatedTo;
