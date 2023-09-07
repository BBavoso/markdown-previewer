/* eslint-disable react/prop-types */
import { marked } from "marked";

marked.use({ breaks: true });

export default function Preview({ inputText }) {
    const getParsedText = () => {
        let parsed = marked.parse(inputText);
        console.log(parsed);
        return parsed;
    };

    return (
        <>
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: getParsedText() }}
            ></div>
        </>
    );
}
