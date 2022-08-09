const ROUTES = {
  path : function (r, callback) {
      ROUTES[r] = callback
  }
}

const addSubmission = (req) => {
  const string = `Add : ${Object.entries(req)}`
  return string
}

function route(path, req) {
  let result = ROUTES[path](req)
  return result
}

ROUTES.path("add", addSubmission)

const doPost = (request) => {
  const path = request.parameter['q']
  //const id = e.parameter['id']
  const result = route(path, request)

  const response = JSON.stringify(result)
  
  return ContentService
      .createTextOutput(response)
      .setMimeType(ContentService.MimeType.JSON)
/*   console.log(request)
  return ContentService.createTextOutput(JSON.stringify(request)) */
}
