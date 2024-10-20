import { google } from 'googleapis';
import keys from '../../../../key.json'; // Pastikan path ini sesuai

export async function POST(req) {
  try {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    await client.authorize();

    const gsapi = google.sheets({ version: 'v4', auth: client });

    // Ambil data dari body request
    const { formType, name, nama, email, whatsapp, keperluan, tanggal, waktu, message } = await req.json();

    let opt;

    // Cek jenis form dan tentukan range penyimpanan
    if (formType === 'KritikSaran') {
      opt = {
        spreadsheetId: '1_CiaVmc_DhtsqYqrCsm5gjrWTE2C8UF9reP89OLXQtM',
        range: 'KritikSaran!A2:C',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [[name, email, message]],
        },
      };
    } else if (formType === 'BukuTamu') {
      opt = {
        spreadsheetId: '1_CiaVmc_DhtsqYqrCsm5gjrWTE2C8UF9reP89OLXQtM',
        range: 'DataPengunjung!A2:F',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[nama, email, whatsapp, keperluan, tanggal, waktu]], // Data untuk Buku Tamu
        },
      };
    }

    await gsapi.spreadsheets.values.append(opt);

    return new Response(JSON.stringify({ error: false, message: 'Data berhasil ditambahkan!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: true, message: e.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
