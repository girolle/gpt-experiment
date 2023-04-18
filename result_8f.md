# Autoreview results:

## Structure
#### List of mistakes:
❌ A .prettierignore file

#### List of correctly completed items:
✅ A .gitignore file

✅ A blocks directory with BEM blocks stored in separate CSS files (Flat BEM)

✅ An images directory with all the images

✅ A pages directory with an index.css file stored inside it

✅ A scripts folder with index.js script file

✅ A vendor directory with normalize.css, fonts.css files and a fonts directory stored inside it

✅ The index.html file

✅ A README.md file

✅ Stylesheets are connected in a separate file

✅ The script is moved to a separate file

#### List of possible improvements:
None

#### List of items that could not be checked:
None

#### Conclusion:
The structure of the project is mostly correct, with only the .prettierignore file missing.

---
## Readme
#### List of mistakes:
None

#### List of correctly completed items:
✅ The project's name (Project 3: Around The U.S.)

✅ A description of the project and its functionality

✅ A description of the technologies and techniques used

✅ The link to GitHub Pages

#### List of possible improvements:
🛠️ Pictures, GIFs, or screenshots that detail the project features (highly recommended)
- It's better to add more pictures, GIFs, or screenshots that detail the project features.

#### List of items that could not be checked:
None

#### Conclusion:
The Readme file is well-structured and provides the necessary information about the project. The only suggestion for improvement is to add more visual content to better showcase the project features.

---
## HTML
#### List of mistakes:
None

#### List of correctly completed items:
✅ viewport is set correctly, title and lang are used.

✅ Headings are made using the appropriate tags (from `<h1>` to `<h6>`). Text blocks are made with `<p>` tags. The `<header>`, `<main>`, `<footer>`, `<section>`, `<ul>`, and `<li>` elements are present in the code and they are used for their intended purposes.

✅ `<b>`, `<br>`, and `<i>` elements are not used.

✅ Elements are not wrapped in `<div>` tags unless required for alignment purposes.

✅ The page has a first-level heading. The hierarchy of headings is consistent, and there are no headings missing.

#### List of possible improvements:
None

#### List of items that could not be checked:
None

#### Conclusion:
The HTML code is well-structured and follows the checklist guidelines. All the required elements are present and used correctly. No improvements are needed.

---
## CSS
#### List of mistakes:
❌ normalize.css is imported into index.css before other CSS files.
 - normalize.css should be imported before other CSS files in index.css.

#### List of correctly completed items:
✅ The layout doesn't break between breakpoints

✅ The cumulative value of the width, padding, and margin properties for each element is specified to within 30px of the design requirements at the 1280px breakpoint. It should also be within 10px of the design requirements at the following breakpoints: 768px, 320px

✅ Stylesheets do not use tag selectors to set CSS rules.

✅ No more than two selectors are nested in any CSS rule.

✅ Stylesheets and images are located in separate folders and organized into blocks. Files are all organized within a Flat BEM file structure.

✅ Blocks are imported into the corresponding page file. CSS rules for elements and modifiers are declared in the corresponding CSS block file.

✅ Modifiers do not contain duplicate styles of the element or block being modified. They contain only the changing properties.

✅ There are no class attributes with a BEM modifier as their only value.

✅ Components that share similar styles or functions constitute a single BEM entity, i.e., a block or an element.

✅ An active popup box is created using a BEM modifier with the necessary CSS properties.

#### List of possible improvements:
None

#### List of items that could not be checked:
None

#### Conclusion:
The CSS code is mostly correct and follows the checklist. The only mistake found is the import order of normalize.css in index.css.

---
## JavaScript
#### List of mistakes:
❌ URL function usage

#### List of correctly completed items:
✅ Initial cards array

#### List of possible improvements:
None

#### List of items that could not be checked:
❔ 6 cards have been created and rendered via JavaScript

❔ The modal for editing the profile has been correctly coded in HTML and CSS

❔ The popup box has the properties that are defined in the project description

❔ The popup must be opened once the modal_opened is added manually in the HTML

❔ The popup must be closed when the modal_opened is removed from HTML

❔ The popups are created with HTML and CSS. They shouldn't be created dynamically with JS

#### Conclusion:
The provided JavaScript code contains an initial cards array with incorrect usage of the URL function. The rest of the checklist items could not be checked due to the absence of the related code.

---
## Final Conclusion:

Overall, the project is well-structured and follows the guidelines provided. The HTML and CSS code is mostly correct, with only a few minor issues that need to be addressed, such as the import order of normalize.css in index.css and the missing .prettierignore file. The Readme file is informative and could benefit from the addition of more visual content. The JavaScript code provided has an issue with the URL function usage, and the rest of the checklist items could not be checked due to the absence of the related code. Once these issues are resolved, the project will be in excellent shape. Keep up the good work!