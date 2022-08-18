const sheetId = '1n-BYfns_ki5UlI51PZL_5p4WdCF2fVOgHA4TbGXPfOo'

// this function executes from html-form
function doPost(e) {
  var data = Utilities.base64Decode(e.parameters.data);
  var blob = Utilities.newBlob(data, e.parameters.mimetype, e.parameters.filename);
  // save image to selected folder
  var folder = DriveApp.getFolderById('1JL85kWwmAPWqyI-0c735N06a4EDpPGvZ');                      // your folder id
  var file = folder.createFile(blob);
  
  // put the image with the help of a formula in a cell in Google Sheets
  // https://webapps.stackexchange.com/questions/86081/insert-image-from-google-drive-into-google-sheets
  var ss = SpreadsheetApp.openById(sheetId);              // your spreadsheet id
  var r = ss.getSheetByName('Sheet1').getRange('S2');                                        // your sheet name and cell-address
  var id = file.getId();
  r.setFormula('=IMAGE("https://docs.google.com/uc?export=view&id=' + id + '")');
  

  // here I want browser window to close 
  PropertiesService.getScriptProperties().setProperty('my_unique_key', 'Done')  
  var output = HtmlService.createHtmlOutput("<b>Done!</b>");
  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
}
function doGet(e) {
}

// this function openes dialog window
function openImageForm()
{  
  var html = HtmlService.createHtmlOutputFromFile('UploadForm');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Select image'); 
  
}

// this function executes from HTML-form and returnes signal to close the window
// after successful loading of the file to Drive
function clientSideFunctionToProcessReturnedData()
{
  var key = 'my_unique_key';
  var props = PropertiesService.getScriptProperties()
  
  while (true)
  {
    var result = props.getProperty(key);
    if (result === 'Done')
    {
      props.deleteProperty(key);
      return true;
    } 
    // check each second
    Utilities.sleep(1000);
  }
}