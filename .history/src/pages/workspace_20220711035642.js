import React, { useState, useEffect, useRef } from "react";
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, ChevronRight, ConstBotIcon, ConstMidIcon, ConstTopIcon, DropDownIcon, FontCaseCapsIcon, FontCaseDefaultIcon, FontCaseHighSmallCapsIcon, FontCaseSmallCaps, FontCaseSmallIcon, FontDotLineIcon, FontOverlineIcon, FontStrikethroughIcon, FontUnderLineIcon, FontWrongLineIcon, IndentIcon, LetterSpacingIcon, LineHeightIcon, ListDiffIcon, ListIcon, ListNumIcon, ListRowIcon, ListSquareIcon, PHeightIcon, PlusIcon, RightIndentIcon, TimesIcon } from "../components/Svg";
import { MenuBar } from "../components/pages/WorkSpace/MenuBar";
import TinyMceEditor from "../components/pages/WorkSpace/TinyMceEditor";
import ToolBar from "../components/pages/WorkSpace/Toolbar";



import "../basicStyle.css"

// function EditButton(props) {
//     return (
//         <button
//             key={props.cmd}
//             onMouseDown={evt => {
//                 evt.preventDefault();
//                 document.execCommand(props.cmd, false, props.arg);
//             }}
//         >
//             {props.name || props.cmd}
//         </button>
//     )
// }


function WorkSpace() {

    const [state, setState] = useState({
        editorState: "<p>Hello World</p>",
        selectedContent: "",
        initAct: "None",
        colorVal: "#FFFFFF",
        fSize: 72,
        lineH: 25,
        letterSpc: 1,
        align: 1,
        Constrain: 1,
        Paragraph: 1,
        pHeight: 999,
        indent: 999,
        pLeft: 999,
        pRight: 999,
        pList: 1,
        decoration: "None",
        pCase: 1,
    });

    return (
        <div className="flex justify-between bg-[#0A0A0A]">
            <MenuBar />
            <TinyMceEditor state={state} setState={setState} />
            <ToolBar state={state} setState={setState} />
        </div>
    )
}

export default WorkSpace;