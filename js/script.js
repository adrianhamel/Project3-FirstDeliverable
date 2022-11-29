
// Initialize and add the map
function initMap() {
    // The location of Ramen san in chicago and salt + smoke in ST. louis
    const chicago = { lat: 41.879986017565244, lng: -87.63656953822385 }; //chicago 41.879986017565244, -87.63656953822385
    const ramenSan = {lat: 41.894863724185996, lng: -87.62286475530867 }; //Ramen San Deluxe 41.89499949009929, -87.62273600927955
    const saltSmoke = {lat:38.623758272376556, lng: -90.19020464918701}//Salt + Smoke: 38.623758272376556, -90.19020464918701


    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: chicago,
    });
    // The marker, positioned at chicago
    const ramenSanLocation = new google.maps.Marker({
        position: Jims,
        map: map,
    });
    const saltSmokeLocaton = new google.maps.Marker({
        position: Lea,
        map: map,
    });

    var ramenSanInfo = new google.maps.InfoWindow({
        content: "<p>Amazing ramen dishes</p>"
    });
    ramenSanInfo.open(map, ramenSanLocation);

    var saltSmokeInfo = new google.maps.InfoWindow({
        content: "<p>Delicous barbecue in Saint Louis. </p>"
    });
    saltSmokeInfo.open(map, saltSmokeLocaton);



}



window.initMap = initMap;