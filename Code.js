const sheetId = '1n-BYfns_ki5UlI51PZL_5p4WdCF2fVOgHA4TbGXPfOo'

/* const ROUTES = {
  path : function (r, callback) {
      ROUTES[r] = callback
  }
}

function route(path, req) {
  let result = ROUTES[path](req)
  return result
}
 */
/* const doPost = (request = {}) => {
  const { 
    postData: { 
      contents, 
      type 
    } = {} 
  } = request */
function doPost(e) {
  const body = e.postData.contents;
  const bodyJSON = JSON.parse(body)
  const ss = SpreadsheetApp.openById(sheetId)
  const ws = ss.getSheetByName("Sheet1")
  //ws.appendRow(["CABE37"])
  const fileid = ""
  const member = "Yes"
  const availability = ""
  const hidden = ""
  const fullname = bodyJSON.firstname + " " + bodyJSON.lastname
  const timestamp = Date.now()
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
    timestamp.toString()
  ]
  ws.appendRow(row)
  //return ContentService.createTextOutput('complete')
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