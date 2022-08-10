const tables = () => {
    return {
        "exhibits" : {
            "name" : "Sheet1",
            "type" : "standard",
            "headers" : 1,
            "schema" : {
                "eventid" : "a",
                "eventtitle" : "b",
                "firstname" : "c",
                "lastname" : "d",
                "email" : "e",
                "phone" : "f",
                "worktitle" : "g",
                "medium" : "h",
                "width" : "i",
                "height" : "j",
                "price" : "k",
                "filename" : "l",
                "fileid" : "m",
                "member" : "n",
                "availablity" : "o", // not currently used
                "hidden" : "p", // not currently used
                "fullname" : "q", // not currently used
                "timestamp" : "r" // not currently used
            }
        }
    }
}

const addSubmission = (req) => {
    const string = `Add : ${Object.entries(req)}`
    return string
  }
  