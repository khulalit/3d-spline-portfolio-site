// utils/googleSheets.js
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const authorize = () => {
  const auth = new google.auth.JWT({
    email: process.env.client_email,
    key: process.env.private_key,
    scopes: SCOPES,
  });

  return auth;
};

const getSheetData = async () => {
  const sheets = google.sheets({ version: 'v4', auth: authorize() });

  const spreadsheetId = process.env.SPREADSHEERID;
  const range = 'Sheet1'; // Update with your sheet name or range

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return response.data.values;
  } catch (error) {
    console.error('Error fetching data from Database :', error);
    return null;
  }
};

export default getSheetData;
