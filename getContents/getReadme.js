import fs from 'fs';
import path from 'path';
import { projectPath } from '../env.js';

function getReadmeContent(projectPath) {
	// add "/README.md" to the projectPath to get the path to the README.md file
	const readmePath = path.join(projectPath, 'README.md');
	// read the contents of the README.md file
	const readmeContent = fs.readFileSync(readmePath, 'utf8');
	// return the contents of the README.md file
	return readmeContent;
}

// remove empty lines
function minifyReadme(readmeContent) {
	return readmeContent
	.replace(/^\s*\n/gm, '')
}

export default minifyReadme(getReadmeContent(projectPath));