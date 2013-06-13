var serviceURL = "http://sacreddeer.herokuapp.com/deer/";

$("#sacreddeerListPage").bind("pageinit", function(event) {
	$("button").bind("click", function(e) {
        showGPS();
	});
});

function showGPS() {
    if(navigator.geolocation) {
        // This is the specific PhoneGap API call
        navigator.geolocation.getCurrentPosition(function(p) {
            // p is the object returned
            alert('Latitude '+p.coords.latitude);
            alert('Longitude '+p.coords.longitude);
        }, function(error){
            alert("Failed to get GPS location");
        });
    } else {
        alert("Failed to get GPS working");
    }
}