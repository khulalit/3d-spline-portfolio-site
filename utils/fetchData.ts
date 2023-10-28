// utils/googleSheets.js
import { google } from 'googleapis';
import axios from 'axios';
import credentials from '../google-api-service.json';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const { client_email, private_key } = credentials;

const authorize = () => {
  const auth = new google.auth.JWT({
    email: client_email,
    key: private_key,
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
    console.error('Error fetching data from Google Sheets:', error);
    return null;
  }
};

export default getSheetData;
