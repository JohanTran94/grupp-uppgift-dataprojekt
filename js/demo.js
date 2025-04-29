// Hämta data
let countyInfo = await dbQuery('SELECT * FROM countyInfo');
console.log(countyInfo);

// Lägg till rubrik
addToPage(`
  <h1> Befolkningstäthet och Röster på Moderaterna, Liberalerna och Kristdemokraterna i Varje Län: Ett Stapeldiagram. </h1>
  <h3>Statistik per Län 2022</h3>
  <canvas id="myChart" width="800" height="300"></canvas>    
`);

// Dataset för befolkning och röster
const data = {
  labels: [
    'Norrbottens län', 'Västerbottens län',
    'Jämtlands län', 'Värmlands län',
    'Stockholms län', 'Södermanlands län',
    'Västra Götalands län', 'Gotlands län',
    'Hallands län', 'Blekinge län',
  ],
  datasets: [
    {
      label: 'Befolkningstäthet (inv/km²)',
      data: [


        98911,
        55401,
        49443,
        17586,
        6519,
        11300,
        23100,
        3140,
        3116,
        2900,




      ],
      backgroundColor: 'rgba(250, 9, 9, 0.98)',
      borderColor: 'rgb(14, 2, 3)',
      borderWidth: 1
    },

    // Lägg till dataset för Röster Moderaterna
    {
      label: 'Röster M',
      data: [


        21917,
        25121, 25121, 9892,
        240712, 35513, 119522,
        0, 53520, 18500,


      ],
      backgroundColor: 'rgba(243, 9, 212, 0.94)',
      borderColor: 'rgba(231, 22, 127, 0.91)',
      borderWidth: 1
    },
    // Lägg till dataset för Röster Liberalerna
    {
      label: 'Röster L',
      data: [

        4094, 5544, 2244,
        6524, 74595, 6643,
        31663, 0, 11573,
        3637,

      ],

      backgroundColor: 'rgba(12, 6, 99, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    // Lägg till dataset för Röster Kristdemokraterna
    {
      label: 'Röster KD',
      data: [

        8260, 8368, 4574,
        2892, 42854, 8772,
        33964, 0, 14787,
        5735,

      ],
      backgroundColor: 'rgba(243, 228, 14, 0.96)',
      borderColor: 'rgb(2, 16, 32)',
      borderWidth: 1
    }
  ]
};


const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Värden'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Län'
        }
      }
    }
  }
};




// Skapa diagrammet
const myChart = new Chart(
  document.getElementById('myChart'), // Elementet där diagrammet ska visas
  config // Konfigurationen för diagrammet
);