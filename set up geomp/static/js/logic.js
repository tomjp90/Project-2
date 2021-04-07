// Custom function to change the map per our API calls
function getDataAddMarkers(test) {
    console.log("this is working!")
};

// Timeline slider plugin for leaflet, can be placed within a function
// Refer to docs: https://github.com/svitkin/leaflet-timeline-slider
L.control.timelineSlider({
    timelineItems: [
        "2011", "2012", "2013",
        "2014", "2015", "2016",
        "2017", "2018", "2019",
        "2020"
    ],      // timeline dates are created using an array of strings
    changeMap: getDataAddMarkers,       // custom function to update the map based on the timeline items
    position: "bottomleft"      // default is "bottomright" if this is preferred
    extraChangeMapParams: { exclamation: "Hello World!" }       // extra parameters that can be read by the function in changeMap
}).addTo(myMap);


