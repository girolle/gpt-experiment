import fs from 'fs';
import path from 'path';
import { projectPath } from '../env.js';

function getStylesPathes(projectPath) {
	const stylesPathes = [];
	const items = fs.readdirSync(projectPath);
	items.forEach((itemName) => {
		const itemPath = path.join(projectPath, itemName);
		const itemStats = fs.statSync(itemPath);
		if (itemStats.isDirectory()) {
			if (itemName === 'vendor') {
				return;
			}
			const subDirectoryContents = getStylesPathes(itemPath);
			subDirectoryContents.forEach((subDirectoryContent) => {
				stylesPathes.push(subDirectoryContent);
			});
		} else {
			const extension = path.extname(itemName);
			if (
				extension === '.css' ||
				extension === '.scss' ||
				extension === '.sass' ||
				extension === '.less'
			) {
				stylesPathes.push(itemPath);
			}
		}
	});
	return stylesPathes;
}

function minifyCSS(stylesContent) {
	return stylesContent
		.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
		.replace(/^\s*\n/gm, '')
		.replace(/\s+/g, ' ');
}

function getStylesContent(stylesPathes) {
	let stylesContent = '/*Hear are all css files of the project. Each file name is in the comment, followed immediately by the file content. The files are separated by a empty line. You have to take into account the file structure*/\n';
	stylesPathes.forEach((stylesPath) => {
		const stylesContentPart = fs.readFileSync(stylesPath, 'utf8');
		stylesContent += `/* ${path.relative(projectPath, stylesPath)} */\n${minifyCSS(stylesContentPart)}\n\n`;
	});
	return stylesContent;
}

export default getStylesContent(getStylesPathes(projectPath));
