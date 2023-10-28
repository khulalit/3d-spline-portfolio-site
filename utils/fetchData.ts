// utils/googleSheets.js
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const authorize = () => {
  const auth = new google.auth.JWT({
    email: "firebase-adminsdk-aioih@blockchain-address-key-pair.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCu/4TRXZa2/gBV\n8VTsWTwbowL1ZT9cl081Gfip6ffK2OK5ysPdiR+R+1dQCRjFyL9gX5mfq/V8ac74\n7XJFE4H8i8VIQ30btMboEjdrLqyzoHAnCNfErHaHzaQVjuJT3SRhIn8Kp1xvj1Z6\nB06OIKDgJ6stLRPKSMwE4ruqSZduzylEPrYlVQ9unlaCZmztdsphr1JHLZRduZGT\nO3U1JdiEwRx0OIICY6twWlpdKmyNkp/IcPVFrhT0BAtMAvfh816NHWfYIdU/lgl1\nO5JL0NWhHIijNByQEnveSTspKvOmQJvUrGsjZQL3bw/HDfMeZEIfOx+Vg/bsIg3m\n4WmWzOsLAgMBAAECggEAFkOoEEMJ88opHMYReeh4f0OkEriI8SzHBQiC3ItJ3WLu\npZiohrz1aUtC9onRvwglYQuIrgngt612ibEcArHSreDSfrknZ6j+TXRT3K0Zh9j3\nq9+yI/GVOv3szFlbbjQKdtk+tIpKdl8UL35Sfj6keSBS5PKBPBE687wtCCNIwu4e\nSZKwvAuhU6NL4LwNyH5kXrScQgEP2h902swfPmn6beLIGXYdjT5CO7ptDVT6ROG/\nPDNXFD5EB5SRMqjbBrlCZ1BCvbag6X/tPhEhZKBs9EBCXmilhTFwB4ikMqQI14a6\niRF6qL8NOHLWMJe4EbUkTJYViqRalMNZmUVyKfb5sQKBgQDoIDzpMeLd3kb17hxh\nMWs/tzUm8qUUmU5Zvp2QCf7Mv3I+Hd0AQuK/UIrXXLkBo9OYaZfVWP7uA/1VC8vu\n7zwllB0zKpnrKDgWa5Kb0dOxkLD/bixN/X+6vhpj2WRwnM5NG+6RAhGDl3epgLoq\npAnbE9c2mMY3NXREKFFVPq4M9QKBgQDA/yI2m4CFOIMc6MkUAetWrt5Kz/q3y1FG\nYDkgl73VEABkgEp3Y+RqX+XW46SUrFcQxGU2iNvY1Zp9yArk2sI9ruzcgAx4TYBA\nl90slRMDnwcuH0MBDYoPBQVmiBPGqHBXM6zZ4KzIR1dLpGdKLyfN2IjfUwTxHF5h\nJswmyLQX/wKBgAlpLS8DH8CA/31+/tWN7Fwz8Eq48appIL0QtlCdpx/j7xzHlyso\niwrYmBhtIO8JFk4KkeZLamJ59O5awRTZzCV14M0vP/hBtCxshhAdLKj5RcPFUrSC\nv4fxpx4/NQw/vzlvFXf5jn44SNitaF7MMb4ZCtOi0/5vA1y0CcAb/3B1AoGAYtmK\njYuiDRn/1avJacz9290fEBRsZvzlOPWJ7Q6rdViHyvIGshXg5TcPAryADIIk6fqd\nmIwKhooJYgk2wzbkrDFPMjUHrgqL+QmPiAkmvwER7Wanq/9iSgUZWgWyk1qsh415\nJ/MyrDYWGTEwkkeKzJzupevgqRoNoRb9E5RS4cMCgYEAnQJJlAsbmSFY2LRx0rLf\n+7YB0ywxFf0jIwh1Vfn1ksYWgklwb8RfYg1CEpy7Vi7BfLppmneTSZkt+paKRnb3\nmyUOeD/La2C0ezdrC25QWHDOBf3YYSQDM1F5S80RHdYVbFEc+iO2OLcP/mQ+I6ek\ndLxBj2DYK4+mQEyULcXMOd0=\n-----END PRIVATE KEY-----\n",
    scopes: SCOPES,
  });

  return auth;
};

const getSheetData = async () => {
  const sheets = google.sheets({ version: 'v4', auth: authorize() });

  const spreadsheetId = "1Yrn8IPYCFiUzQuAn7gEaRwBIFFGKGKZw84IqyYutPKA";
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
