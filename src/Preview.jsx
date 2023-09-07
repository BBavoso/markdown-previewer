/* eslint-disable react/prop-types */
import { marked } from "marked";

marked.use({ breaks: true });
export default function Preview({ inputText }) {
    const getParsedText = () => {
        return marked.parse(inputText);
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
