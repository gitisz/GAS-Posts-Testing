const sheetId = "1n-BYfns_ki5UlI51PZL_5p4WdCF2fVOgHA4TbGXPfOo";

function testDoPost() {
  const dummyRequest = makeDummyRequest();
  doPost(dummyRequest);
}
// this function executes from html-form
const doPost = (request = {}) => {
  const { parameter, postData: { contents, type } = {} } = request;
  const { source } = parameter;
  var image = Utilities.base64Decode(parameter.image);
  var blob = Utilities.newBlob(image, parameter.mimetype, parameter.filename);
  // save image to selected folder
  var folder = DriveApp.getFolderById("1JL85kWwmAPWqyI-0c735N06a4EDpPGvZ"); // your folder id
  var file = folder.createFile(blob);

  var fileName = parameter.filename;
  var workTitle = parameter.worktitle;

  // put the image with the help of a formula in a cell in Google Sheets
  // https://webapps.stackexchange.com/questions/86081/insert-image-from-google-drive-into-google-sheets
  var ss = SpreadsheetApp.openById(sheetId);
  var r = ss.getSheetByName("Sheet1").getRange("S2");
  var fn = ss.getSheetByName("Sheet1").getRange("L2");
  var wt = ss.getSheetByName("Sheet1").getRange("G2");
  var fid = ss.getSheetByName("Sheet1").getRange("M2");
  var id = file.getId();
  r.setFormula(
    '=IMAGE("https://docs.google.com/uc?export=view&id=' + id + '")'
  );
  fn.setValue(fileName);
  wt.setValue(workTitle);
  fid.setValue(id);

  return ContentService.createTextOutput(id);
};
function doGet(e) {}
