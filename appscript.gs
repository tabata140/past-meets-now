function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('locations');
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(data.timestamp),
    data.latitude,
    data.longitude,
    data.accuracy,
    data.name,
    data.slot
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'doGet works' }))
    .setMimeType(ContentService.MimeType.JSON);
}