import fs from 'fs';
import path from 'path';
import { projectPath } from '../env.js';

function getDirectoryContents(projectPath) {
	const directoryContents = [];

	// Get a list of all files and directories in the specified directory
	const items = fs.readdirSync(projectPath);

	// Loop through each item in the directory
	items.forEach((itemName) => {
		const itemPath = path.join(projectPath, itemName);
		const itemStats = fs.statSync(itemPath);
		if (itemStats.isDirectory()) {
			// If the item is a directory, recursively call the function to get its contents
			const subDirectoryContents = getDirectoryContents(itemPath);
			// Add the sub-directory to the directoryContents array as an object
			directoryContents.push({
				[itemName]: subDirectoryContents,
			});
		} else {
			// If the item is a file, add its name to the directoryContents array
			directoryContents.push(itemName);
		}
	});
	return directoryContents;
}

export default JSON.stringify(getDirectoryContents(projectPath));
