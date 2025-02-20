import { google } from 'googleapis';
import keys from '../../../../key.json';

export async function POST(req) {
  try {
    const privateKey = keys.private_key.split('\\n').join('\n'); // Pastikan format private_key benar

    const client = new google.auth.JWT(
      keys.client_email,
      null,
      privateKey,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    await client.authorize();
    console.log("Google Sheets API: Autentikasi berhasil");

    const gsapi = google.sheets({ version: 'v4', auth: client });

    const { formType, nama, email, whatsapp, keperluan, tanggal, waktu, message } = await req.json();
    
    console.log('Data diterima di backend:', { formType, nama, email, whatsapp, keperluan, tanggal, waktu, message });

    let opt;
    if (formType === 'KritikSaran') {
      opt = {
        spreadsheetId: '1_CiaVmc_DhtsqYqrCsm5gjrWTE2C8UF9reP89OLXQtM',
        range: 'KritikSaran!A2:C',
        valueInputOption: 'USER_ENTERED',
        resource: { values: [[nama, email, message]] },
      };
    } else if (formType === 'BukuTamu') {
      opt = {
        spreadsheetId: '1_CiaVmc_DhtsqYqrCsm5gjrWTE2C8UF9reP89OLXQtM',
        range: 'DataPengunjung!A2:F',
        valueInputOption: 'USER_ENTERED',
        resource: { values: [[nama, email, whatsapp, keperluan, tanggal, waktu]] },
      };
    }

    await gsapi.spreadsheets.values.append(opt);
    return new Response(JSON.stringify({ error: false, message: 'Data berhasil ditambahkan!' }), { status: 200 });

  } catch (e) {
    console.error('Error di backend:', e);
    return new Response(JSON.stringify({ error: true, message: e.message }), { status: 400 });
  }
}
