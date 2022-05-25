# HackNUthon Website

## Table of Contents

- [Getting started](#getting-started)
- [Website Sections](#website-sections)
- [Technologies Used](#technologies-used)
- [⭐ Custom Registration Form](#custom-registration-form)

---

<a name="getting-started"></a>
## [Getting started](#getting-started)

![HackNUThon Logo](/images/logo.svg)

## A clean, beautiful, and mobile responsive portfolio website for the hackathon!

To Visit Website [click here](https://bhargavprajapati949.github.io/HackNUthon-2020/)

<a name="website-sections"></a>
## [Website Sections](#website-sections)

✔️ General hackathon Information

✔️ Custom Registrations Form

✔️ Devfolio Registration

✔️ Description and logo

✔️ Prize section

✔️ Schedule

✔️ Past Hackathon Glimpse (Gallary)

✔️ Sponsors & Partners

✔️ Socials

✔️ Themes

✔️ Frequently asked questions

✔️ Footer

<a name="technologies-used"></a>
## [Technologies Used](#technologies-used)


- HTML
- CSS
- JavaScript
- Bootstrap
- jQuery
- Libraries Used
    - [Animate.css](https://github.com/animate-css/animate.css)
    - [Flipdown.js](https://github.com/PButcher/flipdown)
    - [Parallax.js](https://github.com/pixelcog/parallax.js/)

- Google App Script
    - For Registration form Submission

<a name="custom-registration-form"></a>
## [Registration Form](#custom-registration-form)

Link to Registration Form: [Registration Form](https://bhargavprajapati949.github.io/HackNUthon-2020/apply.html)


This is a static website that can be hosted on GitHub pages means there is no need for the server to host this website. But to submit data of registration form there is a need for some backend computing(server) that can accept post requests from the website and store the data.

To, solve this problem I have used Google App Script. 

Google App Script is a scripting platform by Google for lightweight application development in the Google Workspace platform. This can accept HTTP requests from the website and can process them.

Here, I have developed a script to accept POST requests from the website, process form data, and store it in Google Sheets.

```
function doPost(e){
  return handleResponse(e);
}

var SHEET_NAME = "FormData";

var SCRIPT_PROP = PropertiesService.getScriptProperties();

function handleResponse(e) {

    // Applying lock on sheet, to prevent overriding of data
    var lock = LockService.getPublicLock();

    // wait for 30 seconds to get the lock. If the lock is not acquired in 30 sec it will return the error
    lock.waitLock(30000);  

    try {
        //Opening Sheet
        var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
        var sheet = doc.getSheetByName(SHEET_NAME);

        var headRow = 1;
        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        var nextRow = sheet.getLastRow()+1; // get next row
        var row = []; 

        // loop through the header columns
        for (i in headers){
            if (headers[i] == "Timestamp"){
              row.push(new Date());
            } else if(headers[i] == "regNo"){
              row.push(nextRow);
            } else { 
              row.push(e.parameter[headers[i]]);
            }
        }

        // Setting values in sheet
        sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

        // return json success result
        return ContentService
            .createTextOutput(JSON.stringify({"result": "success", "data": { "regNo": nextRow, "email": e.parameter["Email1"]}}))
            .setMimeType(ContentService.MimeType.JSON);
    } catch(e){
        // returning error
        return ContentService
            .createTextOutput(JSON.stringify({"result": 404, "error": e}))
            .setMimeType(ContentService.MimeType.JSON);
    } finally { 
        //releasing lock
        lock.releaseLock();
    }
}

function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}
```
