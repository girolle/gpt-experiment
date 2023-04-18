import fs from 'fs';
import path from 'path';
import { checklistsPath } from '../env.js';


function getChecklists(){
	const checklists = fs
		.readdirSync(checklistsPath)
		.filter((file) => path.extname(file) === '.txt')
		.map((file) => {
			const name = path.basename(file, '.txt');
			const content = fs.readFileSync(
				path.join(checklistsPath, file),
				'utf8'
			);
			return { [name]: content };
		});
	const result = {};
	checklists.forEach((checklist) => {
		const key = Object.keys(checklist)[0];
		result[key] = checklist[key];
	});
	return result;
}

export default getChecklists();
