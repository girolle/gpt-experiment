import fs from 'fs';

import { key } from './env.js';
import { Configuration, OpenAIApi } from 'openai';

import checklists from './getContents/getChecklists.js';
import structure from './getContents/getStructure.js';
import readme from './getContents/getReadme.js';
import html from './getContents/getHTML.js';
import css from './getContents/getCSS.js';
import jsPromise from './getContents/getJsAsync.js';
const javascript = await jsPromise;

const configuration = new Configuration({
	apiKey: key,
});

const openai = new OpenAIApi(configuration);

async function gptCheck(content, checklistKey) {
	const response = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [
			{
				role: 'system',
				content: `You're a code reviewer in the online web development bootcamp.
You need to check correctness of the HTML+CSS+JavaScript project.
There would be 5 independendent checks in order: structure, readme file, html, css, javascript.
You will not see the whole project at once, so never mention that some parts of the project are not provided.`,
			},
			{
				role: 'user',
				content: `Now you need to check the ${checklistKey} with checklist.
You don't change the checklist in any way, use it word for word.
Never check for anything that is not in the checklist. Never suggest any improvements, which are not in the checklist.
Use "List of mistakes" section for exact items from checklist which you consider as mistakes. Don't suggest how to fix the mistakes, but explain what is wrong.
Use "List of correctly completed items" section for exact items from checklist which you consider as correctly completed. Never explain or comment anything in this section.
Use "List of possible improvements" section for exact items from checklist which you don't consider as mistakes, but it's better to improve them.
Use "List of items that could not be checked" section for exact items from checklist which you are not sure if they are mistakes, and also if it's impossible check them. Never explain or comment anything in this section.
There can be no duplicates between the sections.
Every item from checklist should be folowed by an empty line.
If there are no items from checklist in the section, use "None" word.
You need to form a response in markdown as the following:

## ${checklistKey}
#### List of mistakes: (e.g \`❌ A .prettierignore file \n - You need to add a .prettierignore file to the root of the project.\n\`)
#### List of correctly completed items: (e.g \`✅ A .gitignore file\n\n\`)
#### List of possible improvements (e.g \`🛠️ Pictures that detail the project features (highly recommended)\n - It's better to add pictures that detail the project features.\n\`)
#### List of items that could not be checked: (e.g \`❔ The index.html file\n\n\`)
#### Conclusion: (briefly describe the result of the check)

Here is ${checklistKey}:
${content}
Here is the checlist:
${checklists[checklistKey]}
`,
			},
		],
		temperature: 0,
	});
	return response.data.choices[0].message.content;
}

let checkResults = `# Autoreview results:

${await gptCheck(structure, 'Structure')}

---
${await gptCheck(readme, 'Readme')}

---
${await gptCheck(html, 'HTML')}

---
${await gptCheck(css, 'CSS')}

---
${await gptCheck(javascript, 'JavaScript')}

---
`;

async function finalConlusion() {
	const response = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [
			{
				role: 'system',
				content: `You're a code reviewer in the online web development bootcamp.
You already checked the project for correctness.
Now you need to form a final conclusion.`,
			},
			{
				role: 'user',
				content: `Here is the result of the checks:
${checkResults}

You need to form a response in markdown as the following:

## Final conclusion:
(Write a brief conclusion about the project)

You don't repeat the results of the checks, just form a conclusion.
I will directly add your conclusion to the result of the checks, so keep it in the same format.
`,
			},
		],
		temperature: 0.2,
	});
	return response.data.choices[0].message.content;
}

checkResults += await finalConlusion();

fs.writeFileSync('./result.md', checkResults);
