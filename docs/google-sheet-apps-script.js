/**
 * Google Apps Script for Sovilo's Aesthetics Contact Form
 * 
 * This script runs inside a Google Sheet and receives form submissions from the
 * website contact page. Each submission is appended as a new row (customer record).
 * 
 * SETUP:
 * 1. Open your Google Sheet (e.g. the one you use as database).
 * 2. Extensions → Apps Script. Delete any default code.
 * 3. Paste this entire file. Save (Ctrl+S).
 * 4. In the sheet, ensure Row 1 has these headers (exactly one column each):
 *    Timestamp | Name | Phone | Concern / Interest | Preferred Date | Source | Created At
 * 5. Deploy → New deployment → Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone (so the website can POST without login)
 * 6. Authorize the app, then copy the "Web app URL" (ends with /exec).
 * 7. In the frontend, open src/pages/Contact.tsx and set GOOGLE_SHEET_WEBHOOK_URL
 *    to that URL.
 * 
 * The contact form sends: name, phone, concern, preferredDate, source, createdAt
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = e.parameter || {};

    var name = params.name || "";
    var phone = params.phone || "";
    var concern = params.concern || "";
    var preferredDate = params.preferredDate || "";
    var source = params.source || "";
    var createdAt = params.createdAt || "";

    var now = new Date();

    sheet.appendRow([
      now,
      name,
      phone,
      concern,
      preferredDate,
      source,
      createdAt
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok", message: "Record saved." }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
