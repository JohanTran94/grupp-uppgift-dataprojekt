
dbQuery.use('geo-mysql');
let geoData = await dbQuery('SELECT * FROM geoData');

// . Get unique counties (län)
let lan = [...new Set(geoData.map(x => x.county))];

// . Create a dropdown
let chosenLan = addDropdown('Välj län', lan);

// . Get municipalities
let kommunerInLan = [...new Set(geoData.filter(x => x.county == chosenLan).map(x => x.municipality))];

dbQuery.use('riksdagsval-neo4j');

// . Query election results for M, L, KD in selected municipalities
let data = await dbQuery(`
  MATCH (n:Partiresultat)
  WHERE n.parti IN ['Moderaterna', 'Liberalerna', 'Kristdemokraterna']
    AND n.kommun IN ['${kommunerInLan.join("','")}']
  RETURN 
    n.kommun AS kommun, 
    SUM(n.roster2022) AS total_roster_2022
`);

// . Find the kommun with highest votes
let maxValue = Math.max(...data.map(x => x.total_roster_2022));
let kommunWithMaxVotes = data.find(x => x.total_roster_2022 === maxValue)?.kommun;

// . Prepare chart data
let chartData = [['Kommun', 'Röster 2022', { role: 'style' }]];
data.forEach(row => {
  let color = (row.kommun === kommunWithMaxVotes) ? '#FF4136' : '#0074D9';
  chartData.push([row.kommun, row.total_roster_2022, color]);
});

// 9. Draw the chart
drawGoogleChart({
  type: 'BarChart',
  data: chartData,
  options: {
    height: 700,
    chartArea: {
      left: 150,
      top: 50,
      bottom: 120,
      width: '75%'
    },
    bars: 'horizontal',
    bar: {
      groupWidth: '90%'
    },
    legend: {
      position: 'none'
    },
    title: `Totala röster (M+L+KD) per Kommun (Val 2022)`,
    titleTextStyle: {
      fontSize: 22,
      bold: true,
      color: '#333333'
    },
    vAxis: {
      textStyle: {
        fontSize: 14,
        color: '#555555'
      },
      gridlines: {
        color: '#e0e0e0',
        count: 6
      }
    },
    hAxis: {
      format: 'short',
      minValue: 0,
      gridlines: {
        color: '#e0e0e0',
        count: 5
      },
      textStyle: {
        fontSize: 14,
        color: '#555555'
      }
    },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 14,
        color: '#000000',
        auraColor: 'none'
      }
    },
    backgroundColor: '#f4f4f4',
    tooltip: {
      isHtml: true,
      textStyle: {
        fontSize: 14
      }
    }
  }
});

// Adding analysis text below the chart
let analysisText = `
  ### Valresultat (2022) - Moderaterna, Liberalerna och Kristdemokraterna i utvalda kommuner


  Detta diagram illustrerar det totala antalet röster som tre viktiga politiska partier
   — Moderaterna, Liberalerna och Kristdemokraterna
  — fick i olika kommuner runt om i Sverige under riksdagsvalet 2022.

  # Summary :
  Detta diagram visualiserar inte bara det totala antalet röster för Moderaterna, Liberalerna och Kristdemokraterna,
  utan ger också en tydlig jämförelse mellan kommuner och visar var varje parti har starkast stöd. Genom att fokusera på kommunen med högst röster får vi
  insikt i den lokala politiska dynamiken och de regionala skillnader som påverkar valresultaten.`;

console.log(analysisText);
addMdToPage(analysisText);
