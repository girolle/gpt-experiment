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
❌ A description of the project and its functionality

#### List of correctly completed items:
✅ The project's name (Project 3: Around The U.S.)

✅ A description of the technologies and techniques used

✅ The link to GitHub Pages

#### List of possible improvements:
🛠️ Pictures, GIFs, or screenshots that detail the project features (highly recommended)
- It's better to add pictures, GIFs, or screenshots that detail the project features.

#### List of items that could not be checked:
None

#### Conclusion:
The Readme file contains the project's name, a description of the technologies and techniques used, and the link to GitHub Pages. However, it lacks a proper description of the project and its functionality. Additionally, it would be better to include pictures, GIFs, or screenshots that detail the project features.

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
The HTML code is well-structured and follows the checklist guidelines. All items from the checklist are correctly completed.

---
## CSS
#### List of mistakes:
❌ The cumulative value of the width, padding, and margin properties for each element is specified to within 30px of the design requirements at the 1280px breakpoint. It should also be within 10px of the design requirements at the following breakpoints: 768px, 320px

#### List of correctly completed items:
✅ normalize.css is imported into index.css before other CSS files

✅ The layout doesn't break between breakpoints:
- Media queries are properly used so that the layout is maintained at all resolutions.
- Displays with a width of 320px or more doesn’t have horizontal scrolling.
- No text overflows its corresponding block boundary.

✅ Stylesheets do not use tag selectors to set CSS rules.

✅ No more than two selectors are nested in any CSS rule.

✅ Stylesheets and images are located in separate folders and organized into blocks. Files are all organized within a Flat BEM file structure.

✅ Blocks are imported into the corresponding page file. CSS rules for elements and modifiers are declared in the corresponding CSS block file.

✅ Modifiers do not contain duplicate styles of the element or block being modified. They contain only the changing properties.

✅ There are no class attributes with a BEM modifier as their only value. For example, this is wrong: `<div class="block__element_mod-name_mod-value">`. This is correct: `<div class="block__element block__element_mod-name_mod-value">`.

✅ Components that share similar styles or functions constitute a single BEM entity, i.e., a block or an element.

✅ An active popup box is created using a BEM modifier with the necessary CSS properties.

#### List of possible improvements:
None

#### List of items that could not be checked:
None

#### Conclusion:
The CSS code is well-structured and follows the BEM methodology. The only issue found is related to the cumulative value of the width, padding, and margin properties for each element at different breakpoints. Overall, the project's CSS is well-done and just needs a minor adjustment to meet the design requirements at the specified breakpoints.

---
## JavaScript
#### List of mistakes:
❌ All of the features listed in the brief have been implemented and are functioning properly:
 - The provided JavaScript code only contains an array of objects and a console.log statement. It does not implement the required features mentioned in the checklist.

#### List of correctly completed items:
None

#### List of possible improvements:
None

#### List of items that could not be checked:
❔ 6 cards have been created and rendered via JavaScript

❔ The modal for editing the profile has been correctly coded in HTML and CSS. This includes making sure that the following features are implemented:
 - It has a form with two fields titled "Name" and "About me", a "Save" and “Close” buttons.
 - The popup box has the properties that are defined in the project description.
 - The popup must be opened once the modal\_opened is added manually in the HTML. By default, the user shouldn't see the modal box.
 - The popup must be closed when the modal\_opened is removed from HTML.
 - The popups are created with HTML and CSS. They shouldn't be created dynamically with JS.

#### Conclusion:
The provided JavaScript code does not implement the required features mentioned in the checklist. The code only contains an array of objects and a console.log statement.

---
## Final Conclusion:

The project demonstrates a good understanding of HTML and CSS, with a well-structured codebase and adherence to the BEM methodology. However, there are a few areas that need improvement. The .prettierignore file is missing, and the Readme file lacks a proper description of the project and its functionality. The CSS code needs minor adjustments to meet the design requirements at the specified breakpoints. The most significant issue is the lack of proper JavaScript implementation for the required features mentioned in the checklist.

Overall, the project shows potential but requires further work, particularly in the JavaScript implementation, to meet all the requirements and achieve a satisfactory completion.