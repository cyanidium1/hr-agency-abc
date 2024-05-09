import { Client } from '@notionhq/client';

export default async function handler(req, res) {
    const { method } = req;

    if (method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const data = await fetchDataFromNotionDatabase();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data from Notion:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function fetchDataFromNotionDatabase() {
    try {
        const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });
        const databaseId = process.env.NEXT_PUBLIC_NOTION_SERVICES_ID;
        const response = await notion.databases.query({
            database_id: databaseId,
        });
        return response.results;
    } catch (error) {
        console.error('Error querying Notion database:', error);
        throw error;
    }
}
