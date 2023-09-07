import { useState } from "react";
import "./App.css";
import Preview from "./Preview";

function App() {
    const [inputText, setInputText] = useState(`
# This is a heading (very large)
## This is a sub-heading (smaller)
[This is a link](google.com)
<br>inline code: \`print("hello")\`
\`\`\`c
int main() {
    printf("hello world);
}
\`\`\`
- this is a list
- second item in list
> this is a blockquote (idk)

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**this text is bold**
    `);

    const onTextEntry = (e) => {
        setInputText(e.target.value);
    };

    return (
        <>
            <textarea id="editor" onChange={onTextEntry}>
                {inputText}
            </textarea>
            <Preview inputText={inputText} />
        </>
    );
}

export default App;
