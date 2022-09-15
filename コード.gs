function helloworld() {
  console.log("Hello World");
}

function getValue() {
  const ss =  SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("シート1");

  let range = sheet.getRange("A2");
  let value = range.getValue();

  console.log(value);
}