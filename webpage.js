//document.querySelection('hl').addEventListener('click', function() {alert('buttonclicked')})

var layout = {
  title: {
    text:'Reflectance Spectrum',
    font: {
      family: 'cursive, monospace',
      size: 24,
      color: "white"
    },
    xref: 'paper',
    x: 0.5, //0.05 originally
  },
  paper_bgcolor: "black",
  xaxis: {
    title: {
      text: 'Lamp Color',
      font: {
        family: 'cursive, monospace',
        size: 18,
        color: 'white'
      }
    },
  },
  yaxis: {
    title: {
      text: '% Reflectance',
      font: {
        family: 'cursive, monospace',
        size: 18,
        color: 'white'
      }
    }
  }
}; //whole layout section shifted to the top

TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'deep red', 'ir1', 'ir2', 'ir3', 'ir4'],
      y: [25.17680, 56.93512, 48.16870, 34.61139, 30.72429, 36.29124, 52.71226, 60.20539, 92.26804, 112.09302, 118.42475],
     type: 'bar',
    }
  ],
  layout //deleted the margin: and the brackets it was in between
);

//Courier New (font)
