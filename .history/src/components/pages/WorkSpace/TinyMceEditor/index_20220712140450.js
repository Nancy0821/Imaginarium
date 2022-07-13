import React, { useEffect, useState, useRef } from "react";

// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
import { Editor } from "@tinymce/tinymce-react";


const TinyMceEditor = (props) => {
    const { state, setState } = props;
    const [editorState, setEditorState] = useState("<p>Hello World!</p>")
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const handleChange = (e) => {
        setEditorState(e.target.value);
    }

    useEffect(() => {
        if (tinymce.activeEditor.selection) {
            switch (state.align) {
                case 1:
                    tinymce.activeEditor.execCommand("justifyLeft", false, null);
                    break;
                case 2:
                    tinymce.activeEditor.execCommand("justifyCenter", false, null);
                    break;
                case 3:
                    tinymce.activeEditor.execCommand("justifyRight", false, null);
                    break;
                case 4:
                    tinymce.activeEditor.execCommand("justifyFull", false, null);
                    break; default:
                    break;
            }
        }

    }, [state.align])

    return (
        <div className="flex justify-center max-h-[calc(100vh-112px)] w-[65%] overflow-y-auto" >
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </div>

    );
}

export default TinyMceEditor;