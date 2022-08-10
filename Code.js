const sheetId = '1n-BYfns_ki5UlI51PZL_5p4WdCF2fVOgHA4TbGXPfOo'

function doPost(request) {
  const body = request.postData.contents;
  const bodyJSON = JSON.parse(body)
  const ss = SpreadsheetApp.openById(sheetId)
  const ws = ss.getSheetByName("Sheet1")
  const fileid = ""
  const member = "Yes"
  const availability = ""
  const hidden = ""
  const fullname = bodyJSON.firstname + " " + bodyJSON.lastname
  const row = [
    bodyJSON.eventid,
    bodyJSON.eventtitle,
    bodyJSON.firstname,
    bodyJSON.lastname,
    bodyJSON.email,
    bodyJSON.phone,
    bodyJSON.worktitle,
    bodyJSON.medium,
    bodyJSON.width,
    bodyJSON.height,
    bodyJSON.price,
    bodyJSON.filename,
    fileid,
    member,
    availability,
    hidden,
    fullname,
    bodyJSON.timestamp
  ]
  ws.appendRow(row)
  const response = {status: 200, data: row}
  return JSON.stringify(response)
}
  //const path = request.parameter['q']
  //const id = e.parameter['id']
/*   const result = route(path, request)

  const response = JSON.stringify(result)
  
  return ContentService
      .createTextOutput(response)
      .setMimeType(ContentService.MimeType.JSON) 
  console.log(request)*/




//ROUTES.path("add", addSubmission)