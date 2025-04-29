// Bước 1: Lấy dữ liệu từ MongoDB và SQLite như trước
dbQuery.use('kommun-info-mongodb');

let incomeData = (await dbQuery.collection('incomeByKommun').find({ kon: 'totalt' }))
  .map(x => ({
    kommun: x.kommun,
    medianInkomst: x.medianInkomst2022
  }));

dbQuery.use('kommuner_utbildningsniva_kon_alder');

let eduData = await dbQuery(`
  SELECT
    kommun_namn,
    MAX(folkmangde_totalt) AS total_befolkning,
    ROUND(
        100.0 * SUM(
            DISTINCT CASE 
                WHEN utbildningsNiva IN ('4', '5', '6', '7') AND kon IN (1, 2)
                THEN utbildade_antal 
                ELSE 0 
            END
        ) / MAX(folkmangde_totalt), 
        2
    ) AS procent_gymnasie_utbildade
FROM utbildningsniva_befolkning_per_kommun_2022
GROUP BY kommun_namn
`);

let merged = incomeData
  .map(i => {
    let match = eduData.find(e => e.kommun_namn === i.kommun);
    if (!match) return null;
    return {
      kommun: i.kommun,
      percentageEdu: match.procent_gymnasie_utbildade,
      medianIncome: i.medianInkomst,
      folkmangd: match.total_befolkning
    };
  })
  .filter(Boolean);

// Bước 2: Dropdown filter theo thu nhập
let filterVal = addDropdown("Filtrera kommuner", [
  "Alla kommuner",
  "Medianinkomst > 330",
  "Medianinkomst < 330",
]);

// Bước 3: Lọc dữ liệu theo filter 1
let filtered = merged;
if (filterVal === "Medianinkomst > 330") {
  filtered = merged.filter(k => k.medianIncome > 330);
} else if (filterVal === "Medianinkomst < 330") {
  filtered = merged.filter(k => k.medianIncome < 330);
}

// Bước 4: Dropdown 2: Chọn kommun cụ thể từ danh sách sau khi lọc
let kommuner = filtered.map(k => k.kommun).sort();
let selectedKommun = addDropdown("Välj kommun", ["Alla", ...kommuner]);

// Bước 5: Lọc tiếp nếu người dùng chọn kommun cụ thể
let finalData = filtered;
if (selectedKommun !== "Alla") {
  finalData = filtered.filter(k => k.kommun === selectedKommun);
}

// Bước 6: Vẽ biểu đồ với dữ liệu đã chọn
let chartData = makeChartFriendly(
  finalData,
  "Kommun",
  "Andel gymnasie+ (%)",
  "Medianinkomst 2022 (TSEK)",
  "Folkmängd"
);

drawGoogleChart({
  type: "BubbleChart",
  data: chartData,
  options: {
    title: "Utbildningsnivå (gymnasie+) vs Medianinkomst per kommun 2022",
    hAxis: { title: "Andel med gymnasieutbildning eller högre (%)" },
    vAxis: { title: "Medianinkomst (TSEK)" },
    bubble: { textStyle: { fontSize: 10 } },
    sizeAxis: { minValue: 0, maxSize: 30 },
    height: 600
  }
});

addMdToPage(`
Denna visualisering visar att det finns en tydlig skillnad i medianinkomst mellan kommuner med hög respektive låg andel gymnasieutbildade invånare. Genom att dela upp kommunerna i två grupper baserat på medianinkomst kan vi tydligare analysera hur inkomstnivån kan påverka röstmönster i riksdagsvalet 2022. Den här uppdelningen skapar en viktig grund för att vidare undersöka vår hypotes om att kommuner med högre inkomster tenderar att rösta mer på borgerliga partier, särskilt Moderaterna, Liberalerna och Kristdemokraterna. Vi kommer senare att koppla detta till valresultaten för att se om trenden bekräftas.`);



