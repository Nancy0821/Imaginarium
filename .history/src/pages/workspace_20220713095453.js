import React, { useState, useEffect, useRef } from "react";

import { MenuBar } from "../components/pages/WorkSpace/MenuBar";
import TinyMceEditor from "../components/pages/WorkSpace/TinyMceEditor";
import ToolBar from "../components/pages/WorkSpace/Toolbar";

import "../basicStyle.css"

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
        // Constrain: 1,
        Paragraph: false,
        pHeight: 999,
        indent: 999,
        pLeft: 999,
        pRight: 999,
        pList: 1,
        decoration: 1,
        bold: false,
        underline: false,
        strikethr: false,
        italic: false,
        pCase: 1,
        case1: false,
        case2: false,
        case3: false,
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