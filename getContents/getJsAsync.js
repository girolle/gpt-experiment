import fs from 'fs';
import path from 'path';
import { minify } from 'terser';
import { projectPath } from '../env.js';

function getScriptContent(projectPath) {
	// add "/scripts/index.js" to the projectPath to get the path to the index.js file
	const scriptPath = path.join(projectPath, 'scripts/index.js');
	// read the contents of the index.js file
	const scriptContent = fs.readFileSync(scriptPath, 'utf8');
	// return the contents of the index.js file
	return scriptContent;
}

async function minifyJsAsync(scriptContent) {
	const response = await minify(scriptContent, {
		mangle: false, // Keep variable names
		compress: true, // Remove comments
		output: {
		  beautify: false,
		},
	  })
	return response.code;
}

export default minifyJsAsync(getScriptContent(projectPath));
