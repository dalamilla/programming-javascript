import "./assets/styles/main.css";
import "./assets/styles/app.scss";

import { marked } from "marked";
import ghost from "./assets/images/ghost.svg?raw";

const app = document.querySelector("#app");

app.innerHTML = `
    <header>
      ${ghost}
    </header>
    <main>
      <div id="mk-editor">
        <textarea id="editor" aria-label="Markdown content editor"></textarea>
      </div>
      <div id="preview"></div>
    </main>
`;

const editor = document.querySelector("#editor");
const preview = document.querySelector("#preview");

const initialMarkdown = `
# test 
## Test

### Test Types
[Euler Project](https://projecteuler.net)

- Unit Test
- Integration Test
- Functional Test
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
> test
**test**
Heres some code, \`<div></div>\`, between 2 backticks.

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
`;

editor.value = initialMarkdown.trim();

const updatePreview = (text) => {
	preview.innerHTML = marked.parse(text, { breaks: true });
};

updatePreview(editor.value);

editor.addEventListener("input", (e) => {
	updatePreview(e.target.value);
});
