import tinymce from "tinymce";
function getCurrentStyle(state, setState) {
    getLineHeight(state, setState);
    getAlignStyles(state, setState);
}

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
    const lineHeight = tinymce.activeEditor.queryCommandValue("LineHeight");
    setState({ ...state, lineH: parseInt(lineHeight) });
    console.log("getLineHeight: ", lineHeight)
}

export default getCurrentStyle;