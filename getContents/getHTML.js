import fs from 'fs';
import path from 'path';
import htmlMinifier from 'html-minifier';
import { projectPath } from '../env.js';

function getHTMLContent(projectPath) {
	// add "/index.html" to the projectPath to get the path to the index.html file
	const htmlPath = path.join(projectPath, 'index.html');
	// read the contents of the index.html file
	const htmlContent = fs.readFileSync(htmlPath, 'utf8');
	// return the contents of the index.html file
	return htmlContent;
}

function minifyHTML(htmlContent) {
	return htmlMinifier.minify(htmlContent, {
		collapseWhitespace: true,
		removeComments: true,
		minifyCSS: true,
		minifyJS: true,
	});
}

export default minifyHTML(getHTMLContent(projectPath));
