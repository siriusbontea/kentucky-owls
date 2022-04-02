// 🦉 Great Horned Owl layer
var greatHornedOwlRange = L.geoJson(greatHornedOwlData, {
  style: function (feature) {
    return {
      color: "#8dd3c7",
      fillColor: "#8dd3c7",
      weight: 1,
      fillOpacity: 0.6,
      interactive: true,
    };
  },
  onEachFeature: function (feature, layer) {
    const style =
      "width:100px;height:100px;object-fit:cover;vertical-align:middle;border-radius:50%;background-color:white;border:2px solid #8dd3c7;";
    const img = `<img src="../images/GreatHornedOwlAdobeStock_61252701.jpeg" alt="Great Horned Owl" style="${style}">`;
    const popup = `${img} Range of Great Horned Owl`;
    layer.bindTooltip(popup, {
      className: "greatHornedOwl-tooltip",
      sticky: true,
      direction: "auto",
    });
  },
}).addTo(map);

// 🦉 Barred Owl layer
var barredOwlRange = L.geoJson(barredOwlData, {
  style: function (feature) {
    return {
      color: "#ffffb3",
      fillColor: "#ffffb3",
      weight: 1,
      fillOpacity: 0.6,
      interactive: true,
    };
  },
  onEachFeature: function (feature, layer) {
    const style =
      "width:100px;height:100px;object-fit:cover;vertical-align:middle;border-radius:50%;background-color:white;border:2px solid #ffffb3;";
    const img = `<img src="../images/BarredOwlAdobeStock_492137863.jpeg" alt="Barred Owl" style="${style}">`;
    const popup = `${img} Range of Barred Owl`;
    layer.bindTooltip(popup, {
      className: "barredOwl-tooltip",
      sticky: true,
      direction: "auto",
    });
  },
});

// 🦉 Barn Owl layer
var barnOwlRange = L.geoJson(barnOwlData, {
  style: function (feature) {
    return {
      color: "#bebada",
      fillColor: "#bebada",
      weight: 1,
      fillOpacity: 0.6,
      interactive: true,
    };
  },
  onEachFeature: function (feature, layer) {
    const style =
      "width:100px;height:100px;object-fit:cover;vertical-align:middle;border-radius:50%;background-color:white;border:2px solid #bebada;";
    const img = `<img src="../images/BarnOwlAdobeStock_103314895.jpeg" alt="Barn Owl" style="${style}">`;
    const popup = `${img} Range of Barn Owl`;
    layer.bindTooltip(popup, {
      className: "barnOwl-tooltip",
      sticky: true,
      direction: "auto",
    });
  },
});

// 🦉 Eastern Screech Owl layer
var easternScreechOwlRange = L.geoJson(easternScreechOwlData, {
  style: function (feature) {
    return {
      color: "#fb8072",
      fillColor: "#fb8072",
      weight: 1,
      fillOpacity: 0.6,
      interactive: true,
    };
  },
  onEachFeature: function (feature, layer) {
    const style =
      "width:100px;height:100px;object-fit:cover;vertical-align:middle;border-radius:50%;background-color:white;border:2px solid #fb8072;";
    const img = `<img src="../images/EasternScreechOwlAdobeStock_338127944.jpeg" alt="Eastern Screech Owl" style="${style}">`;
    const popup = `${img} Range of Eastern Screech Owl`;
    layer.bindTooltip(popup, {
      className: "easternScreechOwl-tooltip",
      sticky: true,
      direction: "auto",
    });
  },
});

// 🦉 Short-Eared Owl layer
var shortEaredOwlRange = L.geoJson(shortEaredOwlData, {
  style: function (feature) {
    return {
      color: "#80b1d3",
      fillColor: "#80b1d3",
      weight: 1,
      fillOpacity: 0.6,
      interactive: true,
    };
  },
  onEachFeature: function (feature, layer) {
    const style =
      "width:100px;height:100px;object-fit:cover;vertical-align:middle;border-radius:50%;background-color:white;border:2px solid #80b1d3;";
    const img = `<img src="../images/ShortEaredOwlAdobeStock_210749054.jpeg" alt="Short-Eared Owl" style="${style}">`;
    const popup = `${img} Range of Short-Eared Owl`;
    layer.bindTooltip(popup, {
      className: "shortEaredOwl-tooltip",
      sticky: true,
      direction: "auto",
    });
  },
});

// 🦉 Long-Eared Owl layer
var longEaredOwlRange = L.geoJson(longEaredOwlData, {
  style: function (feature) {
    return {
      color: "#fdb462",
      fillColor: "#fdb462",
      weight: 1,
      fillOpacity: 0.6,
      interactive: true,
    };
  },
  onEachFeature: function (feature, layer) {
    const style =
      "width:100px;height:100px;object-fit:cover;vertical-align:middle;border-radius:50%;background-color:white;border:2px solid #fdb462;";
    const img = `<img src="../images/LongEaredOwlAdobeStock_432460986.jpeg" alt="Long-Eared Owl" style="${style}">`;
    const popup = `${img} Range of Long-Eared Owl`;
    layer.bindTooltip(popup, {
      className: "longEaredOwl-tooltip",
      sticky: true,
      direction: "auto",
    });
  },
});

// 🦉 Northern Saw-Whet Owl layer
var northernSawWhetOwlRange = L.geoJson(northernSawWhetOwlData, {
  style: function (feature) {
    return {
      color: "#b3de69",
      fillColor: "#b3de69",
      weight: 1,
      fillOpacity: 0.6,
      interactive: true,
    };
  },
  onEachFeature: function (feature, layer) {
    const style =
      "width:100px;height:100px;object-fit:cover;vertical-align:middle;border-radius:50%;background-color:white;border:2px solid #b3de69;";
    const img = `<img src="../images/NorthernSawWhetOwlAdobeStock_18360777.jpeg" alt="Northern Saw-Whet Owl" style="${style}">`;
    const popup = `${img} Range of Northern Saw-Whet Owl`;
    layer.bindTooltip(popup, {
      className: "northernSawWhetOwl-tooltip",
      sticky: true,
      direction: "auto",
    });
  },
});

// 🦉 Snowy Owl layer
var snowyOwlRange = L.geoJson(snowyOwlData, {
  style: function (feature) {
    return {
      color: "#fccde5",
      fillColor: "#fccde5",
      weight: 1,
      fillOpacity: 0.6,
      interactive: true,
    };
  },
  onEachFeature: function (feature, layer) {
    const style =
      "width:100px;height:100px;object-fit:cover;vertical-align:middle;border-radius:50%;background-color:white;border:2px solid #fccde5;";
    const img = `<img src="../images/SnowyOwlAdobeStock_245155139.jpeg" alt="Snowy Owl" style="${style}">`;
    const popup = `${img} Range of Snowy Owl`;
    layer.bindTooltip(popup, {
      className: "snowyOwl-tooltip",
      sticky: true,
      direction: "auto",
    });
  },
});

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
};
L.control
  .layers(null, sourceLabels, {
    collapsed: false,
    position: "topleft",
    autoZIndex: false,
  })
  .addTo(map);

/* --------------- Toggle on/off info footer content ---------------  */
var clicked = false; // start with false condition
function myInfo() {
  // create button that changes color on click
  // create a footer overlay that displays 25% of the current viewport height
  var x = document.getElementById("footer");
  var y = document.getElementById("info-button");
  if (clicked) {
    y.style.background = "#161616d2"; // gray button
    y.style.color = "#fafafa";
    x.style.height = "0px"; // no footer height
  } else {
    y.style.background = "#ffee0080"; // orange button
    y.style.color = "#000000";
    x.style.height = "15vh"; // footer 15% of viewport height
  }
  clicked = !clicked;
}
