const Map = () => {
    return <div>Map</div>;
};
export default Map;


// Replace 'YOUR_CONTAINER_ELEMENT_ID' with the id of an element on your page where you would like your map.

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoidGhhcm9ud2VpZ2hpbGwiLCJhIjoiY2tzNTk2MDJmMGZjcDJvbXg5ajZiaHo1ayJ9.n_a3-VzJUo8pEQgqacRvkQ';
var map = new mapboxgl.Map({
    container: 'YOUR_CONTAINER_ELEMENT_ID',
    style: 'mapbox://styles/mapbox/streets-v11'
});