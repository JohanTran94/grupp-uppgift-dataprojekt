
dbQuery.use('riksdagsval-neo4j');

let totaltRosterILagInkomstKommun = await dbQuery(`
  MATCH(n: Valid)
  WHERE n.kommun IN["Haninge", "Upplands-Bro", "Uppsala", "Enköping", "Nyköping", "Flen", "Eskilstuna", "Ödeshög", "Kinda", "Boxholm", "Finspång", "Linköping", "Motala", "Mjölby", "Aneby", "Gnosjö", "Vaggeryd", "Eksjö", "Järfälla", "Tierp", "Vingåker", "Katrineholm", "Strängnäs", "Mullsjö", "Värnamo", "Sävsjö", "Högsby", "Mönsterås", "Kalmar", "Nybro", "Oskarshamn", "Vimmerby", "Emmaboda", "Borgholm", "Karlshamn", "Örkelljunga", "Höör", "Bromölla", "Perstorp", "Båstad", "Malmö", "Lund", "Eslöv", "Hässleholm", "Falkenberg", "Dals-Ed", "Gullspång", "Tranemo", "Mark", "Svenljunga", "Tibro", "Göteborg", "Uddevalla", "Ronneby", "Burlöv", "Östra Göinge", "Osby", "Åstorp", "Landskrona", "Vårgårda", "Vara", "Götene", "Lysekil", "Strömstad", "Vänersborg", "Alingsås", "Mariestad", "Skara", "Skövde", "Hjo", "Eda", "Grums", "Karlstad", "Kristinehamn", "Lekeberg", "Hällefors", "Lindesberg", "Skinnskatteberg", "Sala", "Smedjebacken", "Ockelbo", "Hofors", "Ragunda", "Bräcke", "Strömsund", "Vännäs", "Lycksele", "Jokkmokk", "Överkalix", "Kalix", "Lidköping", "Falköping", "Munkfors", "Sunne", "Filipstad", "Hagfors", "Arvika", "Degerfors", "Ljusnarsberg", "Kumla", "Västerås", "Vansbro", "Rättvik", "Orsa", "Borlänge", "Hedemora", "Avesta", "Ljusdal", "Hudiksvall", "Sundsvall", "Örnsköldsvik", "Krokom", "Piteå", "Boden", "Sigtuna", "Älvkarleby", "Östhammar", "Gnesta", "Oxelösund", "Åtvidaberg", "Söderköping", "Nässjö", "Uppvidinge", "Lessebo", "Tingsryd", "Älmhult", "Växjö", "Ljungby", "Mörbylånga", "Hultsfred", "Berg", "Östersund", "Bjurholm", "Robertsfors", "Malå", "Sorsele", "Dorotea", "Haparanda", "Karlskrona", "Sölvesborg", "Svalöv", "Bjuv", "Tomelilla", "Höganäs", "Trelleborg", "Kristianstad", "Halmstad", "Varberg", "Tanum", "Färgelanda", "Grästorp", "Essunga", "Karlsborg", "Bengtsfors", "Lilla Edet", "Upplands Väsby", "Botkyrka", "Södertälje", "Norrtälje", "Nynäshamn", "Heby", "Ydre", "Valdemarsvik", "Norrköping", "Vadstena", "Gislaved", "Jönköping", "Vetlanda", "Tranås", "Alvesta", "Markaryd", "Torsås", "Åmål", "Tidaholm", "Kil", "Torsby", "Storfors", "Forshaga", "Hallsberg", "Örebro", "Surahammar", "Norberg", "Fagersta", "Köping", "Gagnef", "Falun", "Säter", "Ludvika", "Ovanåker", "Gävle", "Bollnäs", "Timrå", "Västervik", "Gotland", "Olofström", "Skurup", "Sjöbo", "Hörby", "Klippan", "Helsingborg", "Ystad", "Simrishamn", "Ängelholm", "Hylte", "Laholm", "Orust", "Sotenäs", "Munkedal", "Mellerud", "Herrljunga", "Töreboda", "Härnösand", "Vindeln", "Storuman", "Vilhelmina", "Umeå", "Arvidsjaur", "Arjeplog", "Övertorneå", "Älvsbyn", "Trollhättan", "Borås", "Ulricehamn", "Årjäng", "Säffle", "Laxå", "Askersund", "Karlskoga", "Nora", "Kungsör", "Hallstahammar", "Arboga", "Malung-Sälen", "Leksand", "Älvdalen", "Mora", "Nordanstig", "Sandviken", "Söderhamn", "Ånge", "Kramfors", "Sollefteå", "Åre", "Härjedalen", "Nordmaling", "Norsjö", "Åsele", "Skellefteå", "Pajala", "Luleå"]
  AND n.parti = "Giltiga Röster"
  RETURN 
    SUM(n.roster2022) AS total_roster_2022
`);

let borgerligaRosterILagInkomstKommun = await dbQuery(`
  MATCH (n:Partiresultat)
  WHERE n.kommun IN["Haninge", "Upplands-Bro", "Uppsala", "Enköping", "Nyköping", "Flen", "Eskilstuna", "Ödeshög", "Kinda", "Boxholm", "Finspång", "Linköping", "Motala", "Mjölby", "Aneby", "Gnosjö", "Vaggeryd", "Eksjö", "Järfälla", "Tierp", "Vingåker", "Katrineholm", "Strängnäs", "Mullsjö", "Värnamo", "Sävsjö", "Högsby", "Mönsterås", "Kalmar", "Nybro", "Oskarshamn", "Vimmerby", "Emmaboda", "Borgholm", "Karlshamn", "Örkelljunga", "Höör", "Bromölla", "Perstorp", "Båstad", "Malmö", "Lund", "Eslöv", "Hässleholm", "Falkenberg", "Dals-Ed", "Gullspång", "Tranemo", "Mark", "Svenljunga", "Tibro", "Göteborg", "Uddevalla", "Ronneby", "Burlöv", "Östra Göinge", "Osby", "Åstorp", "Landskrona", "Vårgårda", "Vara", "Götene", "Lysekil", "Strömstad", "Vänersborg", "Alingsås", "Mariestad", "Skara", "Skövde", "Hjo", "Eda", "Grums", "Karlstad", "Kristinehamn", "Lekeberg", "Hällefors", "Lindesberg", "Skinnskatteberg", "Sala", "Smedjebacken", "Ockelbo", "Hofors", "Ragunda", "Bräcke", "Strömsund", "Vännäs", "Lycksele", "Jokkmokk", "Överkalix", "Kalix", "Lidköping", "Falköping", "Munkfors", "Sunne", "Filipstad", "Hagfors", "Arvika", "Degerfors", "Ljusnarsberg", "Kumla", "Västerås", "Vansbro", "Rättvik", "Orsa", "Borlänge", "Hedemora", "Avesta", "Ljusdal", "Hudiksvall", "Sundsvall", "Örnsköldsvik", "Krokom", "Piteå", "Boden", "Sigtuna", "Älvkarleby", "Östhammar", "Gnesta", "Oxelösund", "Åtvidaberg", "Söderköping", "Nässjö", "Uppvidinge", "Lessebo", "Tingsryd", "Älmhult", "Växjö", "Ljungby", "Mörbylånga", "Hultsfred", "Berg", "Östersund", "Bjurholm", "Robertsfors", "Malå", "Sorsele", "Dorotea", "Haparanda", "Karlskrona", "Sölvesborg", "Svalöv", "Bjuv", "Tomelilla", "Höganäs", "Trelleborg", "Kristianstad", "Halmstad", "Varberg", "Tanum", "Färgelanda", "Grästorp", "Essunga", "Karlsborg", "Bengtsfors", "Lilla Edet", "Upplands Väsby", "Botkyrka", "Södertälje", "Norrtälje", "Nynäshamn", "Heby", "Ydre", "Valdemarsvik", "Norrköping", "Vadstena", "Gislaved", "Jönköping", "Vetlanda", "Tranås", "Alvesta", "Markaryd", "Torsås", "Åmål", "Tidaholm", "Kil", "Torsby", "Storfors", "Forshaga", "Hallsberg", "Örebro", "Surahammar", "Norberg", "Fagersta", "Köping", "Gagnef", "Falun", "Säter", "Ludvika", "Ovanåker", "Gävle", "Bollnäs", "Timrå", "Västervik", "Gotland", "Olofström", "Skurup", "Sjöbo", "Hörby", "Klippan", "Helsingborg", "Ystad", "Simrishamn", "Ängelholm", "Hylte", "Laholm", "Orust", "Sotenäs", "Munkedal", "Mellerud", "Herrljunga", "Töreboda", "Härnösand", "Vindeln", "Storuman", "Vilhelmina", "Umeå", "Arvidsjaur", "Arjeplog", "Övertorneå", "Älvsbyn", "Trollhättan", "Borås", "Ulricehamn", "Årjäng", "Säffle", "Laxå", "Askersund", "Karlskoga", "Nora", "Kungsör", "Hallstahammar", "Arboga", "Malung-Sälen", "Leksand", "Älvdalen", "Mora", "Nordanstig", "Sandviken", "Söderhamn", "Ånge", "Kramfors", "Sollefteå", "Åre", "Härjedalen", "Nordmaling", "Norsjö", "Åsele", "Skellefteå", "Pajala", "Luleå"]
AND n.parti IN ['Moderaterna', 'Liberalerna ', 'Kristdemokraterna']
RETURN SUM(n.roster2022) AS m_l_kd_2022
`);

let procentM_L_KD_LagInkomst = borgerligaRosterILagInkomstKommun[0].m_l_kd_2022 / totaltRosterILagInkomstKommun[0].total_roster_2022 * 100;

console.log(procentM_L_KD_LagInkomst);
console.log(totaltRosterILagInkomstKommun[0].total_roster_2022);
console.log(borgerligaRosterILagInkomstKommun[0].m_l_kd_2022);


let totaltRosterIHogInkomstKommun = await dbQuery(`
  MATCH(n: Valid)
  WHERE n.kommun IN["Vallentuna", "Österåker", "Värmdö", "Huddinge", "Salem", "Tyresö", "Nacka", "Solna", "Vaxholm", "Håbo", "Knivsta", "Danderyd", "Kävlinge", "Härryda", "Stenungsund", "Lerum", "Öckerö", "Ekerö", "Nykvarn", "Täby", "Lidingö", "Trosa", "Staffanstorp", "Vellinge", "Kungsbacka", "Partille", "Tjörn", "Sollentuna", "Stockholm", "Sundbyberg", "Habo", "Kungälv", "Hammarö", "Lomma", "Svedala", "Ale", "Bollebygd", "Mölndal", "Kiruna", "Gällivare"]
  AND n.parti = "Giltiga Röster"
  RETURN 
    SUM(n.roster2022) AS total_roster_2022
`);

let borgerligaRosterIHogInkomstKommun = await dbQuery(`
  MATCH (n:Partiresultat)
  WHERE n.kommun IN["Vallentuna", "Österåker", "Värmdö", "Huddinge", "Salem", "Tyresö", "Nacka", "Solna", "Vaxholm", "Håbo", "Knivsta", "Danderyd", "Kävlinge", "Härryda", "Stenungsund", "Lerum", "Öckerö", "Ekerö", "Nykvarn", "Täby", "Lidingö", "Trosa", "Staffanstorp", "Vellinge", "Kungsbacka", "Partille", "Tjörn", "Sollentuna", "Stockholm", "Sundbyberg", "Habo", "Kungälv", "Hammarö", "Lomma", "Svedala", "Ale", "Bollebygd", "Mölndal", "Kiruna", "Gällivare"]
AND n.parti IN ['Moderaterna', 'Liberalerna ', 'Kristdemokraterna']
RETURN SUM(n.roster2022) AS m_l_kd_2022
`);

let procentM_L_KD_HogInkomst = borgerligaRosterIHogInkomstKommun[0].m_l_kd_2022 / totaltRosterIHogInkomstKommun[0].total_roster_2022 * 100;
console.log(procentM_L_KD_HogInkomst);
console.log(totaltRosterIHogInkomstKommun[0].total_roster_2022);
console.log(borgerligaRosterIHogInkomstKommun[0].m_l_kd_2022);

addMdToPage(`
  #### Jämförelse av andelen röster för M, L och KD mellan kommuner med låg och hög inkomst`);


drawGoogleChart({
  type: 'ColumnChart',
  data: [
    ['Inkomst Groupper', 'Procent'],
    ['Låg Inkomst Kommuner', procentM_L_KD_LagInkomst],
    ['Hög Inkomst Kommuner', procentM_L_KD_HogInkomst]
  ],
  options: {
    height: 500,
    width: 900,
    chartArea: { left: 70, width: '80%' },
    vAxis: {
      title: 'Procent (%)',
      minValue: 0,
      maxValue: 100
    },
    hAxis: {
      title: 'Inkomst Grouper',
    },
    bar: { groupWidth: '60%' },
    colors: ['#ffa500', '#4caf50'],
    legend: { position: 'none' }
  }
});

addMdToPage(`
Här är den centrala diagrammen i vår undersökning. Det är ett stapeldiagram där staplarna representerar procentandelen som stödjer partierna M, L och KD. I gruppen av kommuner med hög inkomst är stödet 33,63 %, medan det i gruppen med lägre inkomst är 27,58 %. Detta resultat stödjer vår hypotes att kommuner med högre inkomst tenderar att stödja partierna M, L och KD. Däremot kan jag inte dra en slutsats att hypotesen är korrekt enbart baserat på detta diagram.`);


addMdToPage(`
#### Test av normalfördelning för datan`);

// vẽ histogram cho phần trăm phiếu bầu cho M+L+KD để kiểm tra phân phối chuẩn

dbQuery.use('M_L_KD_Rostande_2022');
let testData = await dbQuery(`SELECT Kommun, Procent FROM rostande_2022_hogInkomstKommuner`);
console.log(testData);

drawGoogleChart({
  type: 'Histogram',
  data: makeChartFriendly(testData, 'procent_roster_M_L_KD_2022'),
  options: {
    height: 500,
    width: 1250,
    histogram: { bucketSize: 0.5 },
    hAxis: { title: 'Procent' },
    vAxis: { title: 'Frekvens' },
    legend: { position: 'none' }
  }
})

addMdToPage(`
Och här är diagrammet som visar fördelningen av data. I detta diagram ser vi att det har en form som liknar en normalfördelning, men det är inte helt symmetriskt och är något snedfördelat åt höger. Det finns också några outliers över 48 % och under 26 %.`);




addMdToPage(`
#### Normalfördelningstest 1`);
// kiểm tra normalfördelning lần 1

// Lấy dữ liệu 'Procent' từ data
let procentValues1 = testData.map(row => row.Procent);

// Thực hiện kiểm định Shapiro-Wilk
let result1 = stdLib.stats.shapiroWilkTest(procentValues1);

// Thêm cột 'Normalfördelning?'
result1['Normalfördelning?'] = result1.p >= 0.05 ? 'Ja' : 'Nej';

// Hiển thị bảng kết quả
tableFromData({
  data: [result1],
  columnNames: ['Shapiro-Wilk,&nbsp;w', 'p-värde', 'Normalfördelning?']
});

addMdToPage(`
#### Normalfördelningstest 2 (Utan outliers)`);
// kiểm tra normalfördelning lần 2

// Bước 1: Lọc bỏ các giá trị outlier khỏi data2
let cleanedData = testData.filter(row =>
  row.Procent !== 18.67 &&
  row.Procent !== 19.68 &&
  row.Procent !== 60
);

// Bước 2: Lấy lại danh sách 'Procent' sau khi làm sạch
let procentValues2 = cleanedData.map(row => row.Procent);

// Bước 3: Thực hiện kiểm định Shapiro-Wilk
let result2 = stdLib.stats.shapiroWilkTest(procentValues2);

// Bước 4: Kiểm tra kết quả
result2['Normalfördelning?'] = result2.p >= 0.05 ? 'Ja' : 'Nej';

// Hiển thị kết quả kiểm định
tableFromData({
  data: [result2],
  columnNames: ['Shapiro-Wilk,&nbsp;w', 'p-värde', 'Normalfördelning?']
});
addMdToPage(`
Resultatet efter två tester visar att datan inte är normalfördelad. Därför kan jag inte genomföra ett T-test.`);





// Vẽ biểu đồ và tính toán hệ số tương quan giữa thu nhập và tỷ lệ phiếu bầu cho M+L+KD
// Cho kommuner có hög inkomst
// Bước 1: Lấy dữ liệu từ MongoDB và SQLite
dbQuery.use('kommun-info-mongodb');
let incomeData = (await dbQuery.collection('incomeByKommun').find({ kon: 'totalt' }))
  .map(x => ({
    kommun: x.kommun,
    medianInkomst: x.medianInkomst2022
  }));

dbQuery.use('M_L_KD_Rostande_2022');
let Procent_M_L_KDData = (await dbQuery(`SELECT Kommun, Procent FROM rostande_2022_hogInkomstKommuner`))
  .map(x => ({
    kommun: x.Kommun,
    procent: x.Procent
  }));

// Bước 2: Merge hai nguồn dữ liệu
let mergedData = incomeData.map(inc => {
  let match = Procent_M_L_KDData.find(p => p.kommun === inc.kommun);
  if (match) {
    return {
      kommun: inc.kommun,
      medianInkomst: inc.medianInkomst,
      procent: match.procent
    };
  }
}).filter(x => x); // loại bỏ undefined

console.log(mergedData);

// Bước 3: Chuẩn bị dữ liệu để tính toán và vẽ biểu đồ
let medianInkomster = mergedData.map(x => x.medianInkomst);
let procentM_L_KD = mergedData.map(x => x.procent);

// Bước 4: Tính hệ số tương quan Pearson
let correlation = s.sampleCorrelation(medianInkomster, procentM_L_KD);
let absCorrelation = Math.abs(correlation);

// Bước 5: Hiển thị hệ số tương quan
addMdToPage(`
  ## Spridningsdiagram: Medianinkomst 2022 och % röster för M+L+KD (Kommuner med hög inkomst)
  Korrelationskoefficient: ${correlation.toFixed(2)} 
  (${absCorrelation < 0.1 ? 'Ingen korrelation' : absCorrelation < 0.5 ?
    'Svagt ' + (correlation > 0 ? 'positiv' : 'negativ') :
    'Starkt ' + (correlation > 0 ? 'positiv' : 'negativ')})
`);

// Bước 6: Vẽ Scatter Chart với trendline
drawGoogleChart({
  type: 'ScatterChart',
  data: makeChartFriendly(
    mergedData.map(({ medianInkomst, procent }) => [medianInkomst, procent])
  ),
  options: {
    height: 500,
    trendlines: { 0: { type: 'linear', color: 'green' } },
    legend: { position: 'none' },
    hAxis: { title: 'Medianinkomst 2022 (SEK)' },
    vAxis: { title: '% röster för M+L+KD' }
  }
});

addMdToPage(`
Detta spridningsdiagram som visar korrelationen mellan medianinkomst 2022 och andelen röster för M, L och KD i gruppen kommuner med hög inkomst. Resultatet visar en korrelationskoefficient på 0,59 (stark positiv), vilket innebär att när medianinkomsten ökar, tenderar stödet för M, L och KD också att öka. Vi kan också se att inom inkomstintervallet 340 000–390 000 SEK varierar stödet kraftigt – från cirka 20 % till cirka 50 %.`);




// Vẽ biểu đồ và tính toán hệ số tương quan giữa thu nhập và tỷ lệ phiếu bầu cho M+L+KD
// Cho kommuner có låg inkomst

// Bước 1: Lấy dữ liệu từ MongoDB và SQLite
dbQuery.use('kommun-info-mongodb');
let incomeData2 = (await dbQuery.collection('incomeByKommun').find({ kon: 'totalt' }))
  .map(x => ({
    kommun: x.kommun,
    medianInkomst: x.medianInkomst2022
  }));

dbQuery.use('M_L_KD_Rostande_2022');
let Procent_M_L_KDData2 = (await dbQuery(`SELECT Kommun, Procent FROM rostande_2022_lagInkomstKommuner`))
  .map(x => ({
    kommun: x.Kommun,
    procent: x.Procent
  }));

// Bước 2: Merge hai nguồn dữ liệu
let mergedData2 = incomeData2.map(inc => {
  let match = Procent_M_L_KDData2.find(p => p.kommun === inc.kommun);
  if (match) {
    return {
      kommun: inc.kommun,
      medianInkomst: inc.medianInkomst,
      procent: match.procent
    };
  }
}).filter(x => x); // loại bỏ undefined

console.log(mergedData2);

// Bước 3: Chuẩn bị dữ liệu để tính toán và vẽ biểu đồ
let medianInkomster2 = mergedData2.map(x => x.medianInkomst); // <-- Sửa thành mergedData2
let procentM_L_KD2 = mergedData2.map(x => x.procent);         // <-- Sửa thành mergedData2

// Bước 4: Tính hệ số tương quan Pearson
let correlation2 = s.sampleCorrelation(medianInkomster2, procentM_L_KD2);
let absCorrelation2 = Math.abs(correlation2);

// Bước 5: Hiển thị hệ số tương quan
addMdToPage(`
  ## Spridningsdiagram: Medianinkomst 2022 och % röster för M+L+KD (Kommuner med låg inkomst)
  Korrelationskoefficient: ${correlation2.toFixed(2)} 
  (${absCorrelation2 < 0.1 ? 'Ingen korrelation' : absCorrelation2 < 0.5 ?
    'Svagt ' + (correlation2 > 0 ? 'positiv' : 'negativ') :
    'Starkt ' + (correlation2 > 0 ? 'positiv' : 'negativ')})
`);

// Bước 6: Vẽ Scatter Chart với trendline
drawGoogleChart({
  type: 'ScatterChart',
  data: makeChartFriendly(
    mergedData2.map(({ medianInkomst, procent }) => [medianInkomst, procent])
  ),
  options: {
    height: 500,
    trendlines: { 0: { type: 'linear', color: 'green' } },
    legend: { position: 'none' },
    hAxis: { title: 'Medianinkomst 2022 (SEK)' },
    vAxis: { title: '% röster för M+L+KD' }
  }
});

addMdToPage(`
Och här är ett annat spridningsdiagram som visar korrelationen mellan medianinkomst 2022 och andelen röster för M, L och KD i gruppen kommuner med lägre inkomst. Även här ser vi ett starkt samband – när inkomsten ökar, tenderar stödet för M, L och KD också att öka. Dock är korrelationskoefficienten något lägre, 0,53.`);


addMdToPage(`
**Slutsats:** Baserat på korrelationskoefficienterna och de två spridningsdiagrammen kan jag dra slutsatsen att det finns ett starkt samband mellan högre medianinkomst 2022 och ökat stöd för M, L och KD. Detta samband är särskilt tydligt i gruppen av kommuner med hög inkomst. Resultatet stödjer därmed min ursprungliga hypotes att kommuner med högre inkomst tenderar att stödja partierna M, L och KD.`);
