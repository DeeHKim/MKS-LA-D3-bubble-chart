$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "2015 Data Breach", count: "", common: "Report"},
        {text: "Accommodation", count: "722", common: "pos"},
        {text: "Administrative", count: "447", common: "insider"},
        {text: "Educational", count: "611", common: "crimeware"},
        {text: "Entertainment", count: "772", common: "pos"},
        {text: "Financial services", count: "522", common: "crimeware"},
        {text: "Healthcare", count: "222", common: "misc_errors"},
        {text: "Information", count: "517", common: "cyber-espionage"},
        {text: "Management", count: "551", common: 'cyber-espionage'},
        {text: "Manufacturing", count: "336", common: "cyber-espionage"},
        {text: "Mining", count: "921", common: "insider"},
        {text: "Other", count: "541", common: "insider"},
        {text: "Professional", count: "447", common: "cyber-espionage"},
        // {text: "public", count: "928", common: "crimeware"},
        // {text: "real_estate", count: "531", common: "web-app attacks"},
        // {text: "retail", count: "445", common: "pos"},
        // {text: "trade", count: "447", common: "crimeware"},
        // {text: "transportation", count: "481", common: "misc_errors"},
        // {text: "utilities", count: "221", common: "cyber-espionage"},

      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      // {
      //   name: "central-click",
      //   options: {
      //     text: "(See more detail)",
      //     style: {
      //       "font-size": "12px",
      //       "font-style": "italic",
      //       "font-family": "Source Sans Pro, sans-serif",
      //       //"font-weight": "700",
      //       "text-anchor": "middle",
      //       "fill": "white"
      //     },
      //     attr: {dy: "65px"},
      //     centralClick: function() {
      //       alert("Here is more details!!");
      //     }
      //   }
      // },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "common",
              classed: {common: true},
              style: {
                "font-size": "10px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "35px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "75px"}
            }
          ]
        }
      }]
  });
});
