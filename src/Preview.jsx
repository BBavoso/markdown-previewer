/* eslint-disable react/prop-types */
import { marked } from "marked";

marked.use({ breaks: true });
/* eslint-disable react/prop-types */
import { marked } from "marked";

marked.use({ breaks: true });

export default function Preview({ inputText }) {
    return (
        <>
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: getParsedText() }}
            ></div>
        </>
    );
}
