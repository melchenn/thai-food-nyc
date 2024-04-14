mapboxgl.accessToken = 'pk.eyJ1IjoibWVsY2hlbm4iLCJhIjoiY2x1b3dzMm44MWc4NDJqcG9zOGYzYXBhMSJ9.zwxNMqGtGtQeQ_vj0_iv5A';


var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // dark basemap
    center: [-74.00050, 40.73001], // initial position
    zoom: 11.5 // initial zoom
};

// Create the map
const map = new mapboxgl.Map(mapOptions);

// Add navigation controls
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// Add markers to the map
thaiData.forEach(function (thaiRecord) {
    var color = '#f58d16'; // Marker color

    // Create a popup
    const popup = new mapboxgl.Popup({ offset: 24, anchor: 'bottom' })
        .setText(`${thaiRecord.restaurant} price is at ${thaiRecord.price}; most recommended dish is ${thaiRecord.popular}`);

    // Create and add a marker
    new mapboxgl.Marker({ scale: 0.65, color: color })
        .setLngLat([thaiRecord.longitude, thaiRecord.latitude])
        .setPopup(popup)
        .addTo(map);
});