dbQuery.use('kommun-info-mongodb');

let datafortable = await dbQuery.collection('incomeByKommun').find(
  { kon: "totalt", medianInkomst2022: { $lt: 330 } },
  { projection: { _id: 0, kommun: 1, kon: 1, medianInkomst2022: 1 } }
);

tableFromData({
  data: datafortable,
  columnNames: ['Kommun', 'Kön', 'Median Inkomst 2022']
});
