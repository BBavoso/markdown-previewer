import { parse } from "marked";

// eslint-disable-next-line react/prop-types
export default function Preview({ inputText }) {
    return (
        <>
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: parse(inputText) }}
            ></div>
        </>
    );
}
