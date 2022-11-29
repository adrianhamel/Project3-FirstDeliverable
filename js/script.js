
// Initialize and add the map
function initMap() {
    // The location of Ramen san in chicago and salt + smoke in ST. louis
    const chicago = { lat: 41.879986017565244, lng: -87.63656953822385 }; //chicago 41.879986017565244, -87.63656953822385
    const Jims = {lat: 41.8662512919878, lng:-87.64522299999845 }; //jims originial maxwll polish 41.8662512919878, -87.64522299999845
    const Lea = {lat:41.89057935743531, lng: -87.625006555568}//Lea Street Food 41.89057935743531, -87.625006555568


    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: chicago,
    });
    // The marker, positioned at chicago
    const jimslocation = new google.maps.Marker({
        position: Jims,
        map: map,
    });
    const lealocaton = new google.maps.Marker({
        position: Lea,
        map: map,
    });

    var jimsinfo = new google.maps.InfoWindow({
        content: "<p>Best and Maxwell street polish in chicago</p>"
    });
    jimsinfo.open(map, jimslocation);

    var leainfo = new google.maps.InfoWindow({
        content: "<p>Authentic French street food, baguetes and crossiants</p>"
    });
    leainfo.open(map, lealocaton);



}



window.initMap = initMap;