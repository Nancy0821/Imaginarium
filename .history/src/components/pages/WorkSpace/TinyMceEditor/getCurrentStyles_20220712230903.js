import tinymce from "tinymce";

function getCurrentStyle(state, setState) {
    console.log("getAlignStyles")
    const isAlignLeft = tinymce.activeEditor.queryCommandState('JustifyLeft');
    const isAlignCenter = tinymce.activeEditor.queryCommandState('JustifyCenter');
    const isAlignRight = tinymce.activeEditor.queryCommandState('JustifyRight');
    const isAlignFull = tinymce.activeEditor.queryCommandState('JustifyFull');
    let lineHeight = tinymce.activeEditor.queryCommandValue("LineHeight");
    lineHeight = parseInt(lineHeight, 10);
    lineHeight = isNaN(lineHeight) ? 25 : lineHeight;

    let alignVal;

    if (isAlignLeft || (!isAlignLeft && !isAlignCenter && !isAlignRight && !isAlignFull)) {
        alignVal = 1;
    }
    else if (isAlignCenter) {
        alignVal = 2;
    }
    else if (isAlignRight) {
        alignVal = 3;
    }
    else if (isAlignFull) {
        alignVal = 4;
    }

    setState({ ...state, align: alignVal, lineH: lineHeight });

}

export default getCurrentStyle;