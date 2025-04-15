// @ts-check
import { config as dotenvConfig } from 'dotenv'; // Standard import for dotenv
import NotionParse from '@kodaps/notion-parse'; // Assuming the package exports a default
// const dotenv = require('dotenv'); // Remove this line

dotenvConfig();

const go = async () => {
	if (process.env.NOTION_SECRET) {
		await NotionParse.parseNotion(process.env.NOTION_SECRET, 'content', [
			{
				databaseId: process.env.NOTION_PORTFOLIO_DATABASE_ID || '',
				contentType: 'Portfolio'
			},
			{
				databaseId: process.env.NOTION_NEWS_DATABASE_ID || '',
				contentType: 'News'
			},
		]);
	}
};

go().then(() => {
	console.log('Done');
});
