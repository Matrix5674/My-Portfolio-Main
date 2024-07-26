import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
    try {
        console.log('Starting API call');

        // Validate environment variables
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

        if (!privateKey || !clientEmail || !spreadsheetId) {
            throw new Error('Missing environment variables');
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                private_key: privateKey,
                client_email: clientEmail,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client as any });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!B2:F4',
        });

        console.log('API call successful');
        return NextResponse.json(response.data.values || []);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
