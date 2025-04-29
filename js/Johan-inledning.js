addMdToPage(`
### Introduktion
================`);


addMdToPage(`
Vi har undersökt sambandet mellan inkomstnivåer och röstande på olika politiska partier i riksdagsvalet 2022. Vår **röda tråd** har varit att förstå om det finns ett mönster i hur människor röstar beroende på ekonomiska faktorer, specifikt medianinkomst i olika kommuner. Vår **hypotes** är att kommuner med högre medianinkomst tenderar att rösta mer på borgerliga partier, såsom Moderaterna, Liberalerna och Kristdemokraterna.`);


addMdToPage(`
#### Extra data källor:
================`);

addMdToPage(`
[Befolkningsstatistik efter kommun och kön 2022 - SCB](https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__BE__BE0101__BE0101G/BefforandrKvRLK/table/tableViewLayout1/)`);
addMdToPage(`
Vi har importerat datan till en SQLite-databas eftersom vi behöver befolkningsdata (folkmängd) för att beräkna andelen personer som har avslutat gymnasiet eller högre utbildning i varje kommun.`);

addMdToPage(`
[Utbildningsnivå efter kommun och kön 2022 - SCB](https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__UF__UF0506/Utbildning/table/tableViewLayout1/)`);
addMdToPage(`
Vi har filtrerat data efter kommun, kön och utbildningsnivå för år 2022 och importerat den sedan till en SQLite-databas.`);

addMdToPage(`
[Kommunnamn och kommunkod - SCB](https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__BE__BE0101__BE0101G/BefforandrKvRLK/table/tableViewLayout1/)`);
addMdToPage(`
Datan vi hämtade från SCB visar endast kommunkod och inte kommunnamn, så vi använder denna data för att omvandla kommunkod till kommunnamn. *(Innan vi hade mall 8)*`);
