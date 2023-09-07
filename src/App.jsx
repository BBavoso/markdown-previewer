import { useState } from "react";
import "./App.css";
import Preview from "./Preview";

function App() {
    const [inputText, setInputText] = useState("");

    const onTextEntry = (e) => {
        setInputText(e.target.value);
    };

    return (
        <>
            <textarea id="editor" onChange={onTextEntry}></textarea>
            <Preview inputText={inputText} />
        </>
    );
}

export default App;
