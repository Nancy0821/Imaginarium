import tinymce from "tinymce";

function getCurrentStyle(state, setState) {
    console.log("getAlignStyles")
    const isAlignLeft = tinymce.activeEditor.queryCommandState('JustifyLeft');
    const isAlignCenter = tinymce.activeEditor.queryCommandState('JustifyCenter');
    const isAlignRight = tinymce.activeEditor.queryCommandState('JustifyRight');
    const isAlignFull = tinymce.activeEditor.queryCommandState('JustifyFull');

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

    let lineHeight = tinymce.activeEditor.queryCommandValue("LineHeight");
    lineHeight = parseFloat(lineHeight, 10);
    lineHeight = isNaN(lineHeight) ? 25 : lineHeight;
    // let ordered = tinymce.activeEditor.queryCommandState('InsertOrderedList', 'list-style-type');
    // let unordered = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode());

    // console.log("ordered: ", ordered);
    // console.log("unordered: ", unordered);

    // let spacing = tinymce.activeEditor.queryCommandState("mceNonBreaking");
    // console.log("spacing: ", spacing);

    let boldStatus = tinymce.activeEditor.queryCommandState("Bold");
    let italicStatus = tinymce.activeEditor.queryCommandState("Italic");
    let underlineStatus = tinymce.activeEditor.queryCommandState("Underline");
    let strikeStatus = tinymce.activeEditor.queryCommandState("Strikethrough");

    let case1 = tinymce.activeEditor.queryCommandState("mceTitleCase");
    let case2 = tinymce.activeEditor.queryCommandState("mceUpperCase");
    let case3 = tinymce.activeEditor.queryCommandState("mceLowerCase");
    let caseStatus;
    if (case1) caseStatus = 1;
    else if (case2) caseStatus = 2;
    else if (case3) caseStatus = 3;


    setState({ ...state, align: alignVal, lineH: lineHeight, bold: boldStatus, italic: italicStatus, underline: underlineStatus, strikethr: strikeStatus, pCase: caseStatus });

}

export default getCurrentStyle;