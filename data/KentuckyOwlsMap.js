 // 🦉 Great Horned Owl layer
 var greatHornedOwlRange = L.geoJson(greatHornedOwlData, {
    style: function (feature) {
      return {
        color: '#8dd3c7',
        fillColor: '#8dd3c7',
        weight: 1,
        fillOpacity: .6,
        interactive: true
      }
    },
  }).addTo(map).bindTooltip('Range of Great Horned Owl', {sticky: true, direction: 'auto'});

  // 🦉 Barred Owl layer
  var barredOwlRange = L.geoJson(barredOwlData, {
    style: function (feature) {
      return {
        color: '#ffffb3',
        fillColor: '#ffffb3',
        weight: 1,
        fillOpacity: .6,
        interactive: true
      }
    },
  }).bindTooltip('Range of Barred Owl', {sticky: true, direction: 'auto'});

  // 🦉 Barn Owl layer
  var barnOwlRange = L.geoJson(barnOwlData, {
    style: function (feature) {
      return {
        color: '#bebada',
        fillColor: '#bebada',
        weight: 1,
        fillOpacity: .6,
        interactive: true
      }
    },
  }).bindTooltip('Range of Barn Owl', {sticky: true, direction: 'auto'});

  // 🦉 Eastern Screech Owl layer
  var easternScreechOwlRange = L.geoJson(easternScreechOwlData, {
    style: function (feature) {
      return {
        color: '#fb8072',
        fillColor: '#fb8072',
        weight: 1,
        fillOpacity: .6,
        interactive: true
      }
    }
  }).bindTooltip('Range of Eastern Screech Owl', {sticky: true, direction: 'auto'});

  // 🦉 Short-Eared Owl layer
  var shortEaredOwlRange = L.geoJson(shortEaredOwlData, {
    style: function (feature) {
      return {
        color: '#80b1d3',
        fillColor: '#80b1d3',
        weight: 1,
        fillOpacity: .6,
        interactive: true
      }
    },
  }).bindTooltip('Range of Short-Eared Owl', {sticky: true, direction: 'auto'});

  // 🦉 Long-Eared Owl layer
  var longEaredOwlRange = L.geoJson(longEaredOwlData, {
    style: function (feature) {
      return {
        color: '#fdb462',
        fillColor: '#fdb462',
        weight: 1,
        fillOpacity: .6,
        interactive: true
      }
    }
  }).bindTooltip('Range of Long-Eared Owl', {sticky: true, direction: 'auto'});

  // 🦉 Northern Saw-Whet Owl layer
  var northernSawWhetOwlRange = L.geoJson(northernSawWhetOwlData, {
    style: function (feature) {
      return {
        color: '#b3de69',
        fillColor: '#b3de69',
        weight: 1,
        fillOpacity: .6,
        interactive: true
      }
    },
  }).bindTooltip('Range of Northern Saw-Whet Owl', {sticky: true, direction: 'auto'});

  // 🦉 Snowy Owl layer
  var snowyOwlRange = L.geoJson(snowyOwlData, {
    style: function (feature) {
      return {
        color: '#fccde5',
        fillColor: '#fccde5',
        weight: 1,
        fillOpacity: .6,
        interactive: true
      }
    },
  }).bindTooltip('Range of Snowy Owl', {sticky: true, direction: 'auto'});

  // layer controls check box
  var sourceLabels = {
    "<b style='color:#8dd3c7'>Great Horned Owl</b>": greatHornedOwlRange,
    "<b style='color:#ffffb3'>Barred Owl</b>": barredOwlRange,
    "<b style='color:#bebada'>Barn Owl</b>": barnOwlRange,
    "<b style='color:#fb8072'>Eastern Screech Owl</b>": easternScreechOwlRange,
    "<b style='color:#80b1d3'>Short-Eared Owl</b>": shortEaredOwlRange,
    "<b style='color:#fdb462'>Long-Eared Owl</b>": longEaredOwlRange,
    "<b style='color:#b3de69'>Northern Saw-Whet Owl</b>": northernSawWhetOwlRange,
    "<b style='color:#fccde5'>Snowy Owl</b>": snowyOwlRange,
  }
  L.control.layers(null, sourceLabels, {
      collapsed: false,
      position: 'topleft',
      autoZIndex: false,
    })
    .addTo(map);