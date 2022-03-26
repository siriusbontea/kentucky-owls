 // Adding to range circle to the map on mouse click
 var radiusCentre = L.circle([0, 0], 5, { // centre red dot
    fillOpacity: .1,
    fillColor: 'red',
    color: 'red',
    opacity: 1,
    stroke: true,
    weight: 2,
    interactive: false, // This allows users to click through the circle
    autoZIndex: true, // This places the marker above other layers
  })
  var radiusCircle250 = L.circle([0, 0], 250000, { // 250km
    fillColor: 'white',
    fillOpacity: 0.05,
    color: 'white',
    opacity: .7,
    stroke: true,
    weight: .2,
    interactive: false
  })
  var radiusCircle = L.circle([0, 0], 500000, { // 500km
    fillColor: 'white',
    fillOpacity: 0.05,
    color: 'white',
    opacity: .7,
    stroke: true,
    weight: .2,
    interactive: false
  })
  var radiusCircle750 = L.circle([0, 0], 750000, { // 750km
    fillColor: 'white',
    fillOpacity: 0.05,
    color: 'white',
    opacity: .7,
    stroke: true,
    weight: .2,
    interactive: false
  })
  var radiusBigCircle = L.circle([0, 0], 1000000, { // 1000km
    fillColor: 'white',
    fillOpacity: 0.05,
    color: 'white',
    opacity: .7,
    stroke: true,
    weight: .2,
    interactive: false // This allows users to click through the circle
  })
  map.on('click', function (e) {
    // center circle location on current click point
    radiusCentre.setLatLng(e.latlng)
      .addTo(map);
    radiusCircle250.setLatLng(e.latlng)
      .addTo(map);
    radiusCircle.setLatLng(e.latlng)
      .addTo(map);
    radiusCircle750.setLatLng(e.latlng)
      .addTo(map);
    radiusBigCircle.setLatLng(e.latlng)
      .addTo(map);
  });