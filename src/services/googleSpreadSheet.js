import config from 'config/googleSpreadSheetConfig.js'
const gapi = window.gapi;

export default class GoogleSpreadSheet {

  initGoogleSpreadSheet() {
    return new Promise((resolve, reject) => {
      gapi.load('client', () => {
        gapi.client
        .init({
          apiKey: config.apiKey,
          discoveryDocs: config.discoveryDocs,
          scope: config.scope,
          clientId: config.clientId,
        })
        .then(() => gapi.client.load('sheets', 'v4', resolve()))
        .catch(reject);
      });
    });
  }

  async getData() {
    const { result: { values }} = await gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: config.spreadsheetId,
      range: 'A:C'
    })

    return values
  }

  writeData() {
    return gapi.client.sheets.spreadsheets.values.update({
      spreadsheetId: config.spreadsheetId,
      range: 'A1:C1',
      resource: {
        values: [
          'data4',
          'data5',
          'data6',
        ]
      },
    });
  }
}


// https://sheets.googleapis.com/v4/spreadsheets/1tbTFo_4J3Zd04LZuqZzD1HN7p6rZfandahdxpwlj0S0:batchUpdate

// {

// "requests": {
//   "appendCells": {
// "sheetId":0,
// "fields": "*",
// "rows": [
//   {
//     values: {
//      "userEnteredValue": {
//        "stringValue": "JHSJKSAHJKS"
//       }
//    }
//   }
// ],
// }
// }
// }

// POST https://sheets.googleapis.com/v4/spreadsheets/1tbTFo_4J3Zd04LZuqZzD1HN7p6rZfandahdxpwlj0S0/values/Sheet1!A:D:append?valueInputOption=USER_ENTERED

// {
//   "range": "Sheet1!A:D",
//   "majorDimension": "ROWS",
//   "values": [
//     ["Item", "Cost", "Stocked", "Ship Date"],
//     ["Wheel", "$20.50", "4", "3/1/2016"],
//     ["Door", "$15", "2", "3/15/2016"],
//     ["Engine", "$100", "1", "30/20/2016"],
//     ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
//   ],
// }