


dbQuery.use('riksdagsval-neo4j');

google.charts.load('current', {
  packages: ['geochart'],
  mapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
});

google.charts.setOnLoadCallback(drawGeoChart);

function drawGeoChart() {
  let container = document.getElementById('geochart_div');
  if (!container) {
    container = document.createElement('div');
    container.id = 'geochart_div';
    container.style.width = '900px';
    container.style.height = '600px';
    document.body.appendChild(container);
  }

  const data = google.visualization.arrayToDataTable([
    ['Region', 'Votes', { type: 'string', role: 'tooltip' }],
    ['SE-AB', 372606, 'Stockholm County: 372,606 votes'],
    ['SE-C', 60223, 'Uppsala County: 60,223 votes'],
    ['SE-D', 44285, 'Södermanland County: 44,285 votes'],
    ['SE-M', 208735, 'Skåne County: 208,735 votes'],
    ['SE-O', 268555, 'Västra Götaland County: 268,555 votes'],
    ['SE-K', 24235, 'Blekinge County: 24,235 votes'],
    ['SE-W', 41895, 'Dalarna County: 41,895 votes'],
    ['SE-I', 8614, 'Gotland County: 8,614 votes'],
    ['SE-N', 63138, 'Halland County: 63,138 votes'],
    ['SE-Z', 17148, 'Jämtland County: 17,148 votes'],
    ['SE-F', 64239, 'Jönköping County: 64,239 votes'],
    ['SE-H', 39898, 'Kalmar County: 39,898 votes'],
    ['SE-G', 32841, 'Kronoberg County: 32,841 votes'],
    ['SE-BD', 30183, 'Norrbotten County: 30,183 votes'],
    ['SE-T', 42876, 'Örebro County: 42,876 votes'],
    ['SE-E', 77566, 'Östergötland County: 77,566 votes'],
    ['SE-S', 41658, 'Värmland County: 41,658 votes'],
    ['SE-Y', 30767, 'Västernorrland County: 30,767 votes'],
    ['SE-U', 41658, 'Västmanland County: 41,658 votes'],
    ['SE-X', 38965, 'Gävleborg County: 38,965 votes']
  ]);

  const options = {
    region: 'SE',
    resolution: 'provinces',
    colorAxis: { colors: ['#e0f7fa', '#006064'] },
    tooltip: { trigger: 'focus' },
    backgroundColor: '#f4f4f4',
    datalessRegionColor: '#e0e0e0'
  };

  const chart = new google.visualization.GeoChart(container);
  chart.draw(data, options);
}
