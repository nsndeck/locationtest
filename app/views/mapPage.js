var geolocation = require("tns-geolocation");

function onNavigatedTo(args) {
    args.object.bindingContext = args.context;
    //var map = args.object.getViewById("map");
    //console.log("Map found: " + map);
    //setTimeout(function(){
        //console.log("Entering time out.");
        //var newLocation = new geolocation.Location();
        //newLocation.latitude = 42.650600;
        //newLocation.longitude = 23.379318;
        //console.log("newLocation is %j", newLocation);
        //map.marker = newLocation;
    //}, 10000);
}
exports.onNavigatedTo = onNavigatedTo;

//function onMapLoaded(args) {
//    var mapView = args.object;
//    //console.log("mapView.center: " + mapView.center);
//    var splitValues = mapView.center.split(",");
//    var lat = parseFloat(splitValues[0].trim());
//    var lng = parseFloat(splitValues[1].trim());
//    console.log("lat: " + lat + " lng: " + lng);
//var map = args.map;
////var telerik = new com.google.android.gms.maps.model.LatLng(42.650600, 23.379318);
//var telerik = new com.google.android.gms.maps.model.LatLng(lat, lng);
//map.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(telerik).title("Marker at Telerik"));
//map.moveCamera(com.google.android.gms.maps.CameraUpdateFactory.newLatLngZoom(telerik, 18.0));
//
//    var newPoint = new com.google.android.gms.maps.model.LatLng(lat - 1, lng);
//    map.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(newPoint).title("Test Marker"));
//    setTimeout(function(){map.moveCamera(com.google.android.gms.maps.CameraUpdateFactory.newLatLngZoom(newPoint, 8.0))}, 5000);
//}
//exports.onMapLoaded = onMapLoaded;
