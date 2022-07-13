import { useEffect } from "react";
import tinymce from "tinymce";

function getAlignStyles(state, setState) {
    console.log("getAlignStyles")
    const isAlignLeft = tinymce.activeEditor.queryCommandState('JustifyLeft');
    const isAlignCenter = tinymce.activeEditor.queryCommandState('JustifyCenter');
    const isAlignRight = tinymce.activeEditor.queryCommandState('JustifyRight');
    const isAlignFull = tinymce.activeEditor.queryCommandState('JustifyFull');
    if (isAlignLeft || (!isAlignLeft && !isAlignCenter && !isAlignRight && !isAlignFull)) {
        setState({ ...state, align: 1 });
    }
    else if (isAlignCenter) {
        setState({ ...state, align: 2 })
    }
    else if (isAlignRight) {
        setState({ ...state, align: 3 })
    }
    else if (isAlignFull) {
        setState({ ...state, align: 4 })
    }
}

function getLineHeight(state, setState) {
    let lineHeight = tinymce.activeEditor.queryCommandValue("LineHeight");
    lineHeight = parseInt(lineHeight, 10);
    lineHeight = isNaN(lineHeight) ? 25 : lineHeight;
    setState({ ...state, lineH: lineHeight });
    console.log("getLineHeight: ", lineHeight)
}

const getCurrentStyle = (state, setState) => {
    useEffect(() => {
        getAlignStyles(state, setState);
    }, [])

    useEffect(() => {
        getLineHeight(state, setState);
    }, [])
}

export default getCurrentStyle;