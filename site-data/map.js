/*
PROJCS["NAD_1983_HARN_StatePlane_North_Dakota_South_FIPS_3302",
    GEOGCS["GCS_North_American_1983_HARN",
        DATUM["NAD83_High_Accuracy_Regional_Network",
            SPHEROID["GRS_1980",6378137,298.257222101]],
        PRIMEM["Greenwich",0],
        UNIT["Degree",0.017453292519943295]],
    PROJECTION["Lambert_Conformal_Conic_2SP"],
    PARAMETER["False_Easting",600000],
    PARAMETER["False_Northing",0],
    PARAMETER["Central_Meridian",-100.5],
    PARAMETER["Standard_Parallel_1",46.18333333333333],
    PARAMETER["Standard_Parallel_2",47.48333333333333],
    PARAMETER["Latitude_Of_Origin",45.66666666666666],
    UNIT["Meter",1],
    AUTHORITY["EPSG","102321"]]
 */

var naprj = {
  epsg: 'EPSG:102321',
  def: '+proj=lcc +lat_1=46.18333333333333 +lat_2=47.48333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m no_defs',
  resolutions: [8192, 4096, 2048, 1024, 512, 256, 128],
  origin: [0, 0]
}

var crs = new L.Proj.CRS(naprj.epsg, naprj.def, {
  resolutions: naprj.resolutions,
  origin: naprj.origin
})

var options = {
  crs: crs,
  center: [38.0386253, -84.5042394], // University of Kentucky - Department of Geography, Lexington, Kentucky
  //  center: [36.6963788, -84.5468082], // Bob Ross Rd, Stearns, Kentucky
  //  center: [29.0274313, -80.8953009], // Bob Ross Art Workshop, New Smyrna Beach, Florida
  //  center: [39.9989898, -102.0508567], // CO KS NE Triple Point
  // center: [47.1152105, -101.3031364], // Center, North Dakota - The Geographical Centre of North America!
  zoom: 2.5,
  zoomSnap: .5,
  zoomDelta: 0.2,
  zoomControl: false
}
var map = L.map('map', options);
map.attributionControl.setPrefix('');

//  L.control.zoom({
//      position: 'bottomright'
//  }).addTo(map);

var UKyIcon = L.icon({
  iconUrl: 'https://siriusbontea.github.io/kentucky-owls/site-data/graphics/Kentucky_Wildcats_logo.svg',
  iconSize: [30, 33], // size of the icon
  iconAnchor: [5, 10], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
});

L.marker([38.0386253, -84.5042394], {
  icon: UKyIcon
}).addTo(map).bindTooltip(`<img src='site-data/graphics/wildcats.png'><br>Geography, y'all!`, {
  className: 'blue-tooltip',
  maxWidth: 300,
  sticky: true
});

// Political Boundary Lines
fetch("data/boundary_lines.json")
  .then(function (response) {
    console.log(response)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  })
  .then(function (data) {
    var data = L.geoJson(data, {
      style: function (feature) {
        return {
          color: '#ffffff',
          weight: .5,
          opacity: 1,
          interactive: false
        }
      },

    }).addTo(map);
    drawMap(data)
  })
  .then(function () {
    drawNewLayers()
  })
  .catch(function (error) {
    console.log(`Something went wrong: ${error}`);
  });

// Kentucky Boundary Lines
fetch("data/Kentucky-boundary.geojson")
  .then(function (response) {
    console.log(response)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  })
  .then(function (data) {
    var data = L.geoJson(data, {
      style: function (feature) {
        return {
          color: 'blue',
          weight: 2,
          opacity: 1,
          fillColor: '#ffffff',
          fillOpacity: .1,
          interactive: false
        }
      },

    }).addTo(map);
  })
  .then(function () {
    drawNewLayers()
  })
  .catch(function (error) {
    console.log(`Something went wrong: ${error}`);
  });