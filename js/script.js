var serviceURL = "http://sacreddeer.herokuapp.com/deer/";

$("#sacreddeerListPage").bind("pageinit", function(event) {
    mapInit();
	$("button").bind("click", function(e) {
        showGPS();
	});
});

function showGPS() {
    if(navigator.geolocation) {
        // This is the specific PhoneGap API call
        navigator.geolocation.getCurrentPosition(function(p) {
            // p is the object returned
            mapPosition(p.coords.latitude, p.coords.longitude)
        }, function(error){
            alert("Failed to get GPS location");
        });
    } else {
        alert("Failed to get GPS working");
    }
}

function mapPosition(lat, lng){
    map.setView([lat, lng], map.getZoom());
}

function mapInit() {
    var zoomCtrl = new L.Control.Zoom({
        position: 'bottomright'
    });

    var attrCtrl = new L.Control.Attribution({
        position: 'bottomright',
        prefix: ''
    });

    map = L.map('map',{
        zoomControl: false,
        attributionControl: false,
        dragging: true
    }).setView([59.4061536911142, 56.80575370788574], 15);

    map.addControl(zoomCtrl);
    map.addControl(attrCtrl);
    console.log(map);

    L.tileLayer('http://{s}.tile.cloudmade.com/282e84ccee6343f9b7440ac84f31dbf6/997/256/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);
}