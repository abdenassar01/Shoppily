import { useState } from 'react'

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import "./styles.css"

const RichTextEditor = ({convertedContent, setConvertedContent}) => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }

    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }

  return (
        <>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </>
    )
}

export default RichTextEditor