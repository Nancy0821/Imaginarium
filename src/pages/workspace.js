import React from "react";
import { FileMenu, FileText } from "../components/Svg";

// const MenuData = [
//     {
//         id: 1,

//     }
// ]

const MenuBar = () => {
    return (
        <div className="w-[18rem] bg-[#161616] h-[calc(100vh-112px)]">
            <div className="flex flex-col items-start pl-5 pt-3 pr-2 pb-3">
                <label className="flex flex-row justify-center items-center gap-4 px-1 py-2">
                    <FileMenu />
                    <p className="text-xs text-white font-normal">PROJECT STRUCTURE</p>
                </label>
            </div>
            <div className="border-[1px] border-[#262626]" />
            <div className="flex flex-col items-start pl-5 pt-3 pr-2 pb-3">
                <label className="flex flex-row items-center gap-3 px-1 py-2">
                    <FileText />
                    <p className="text-sm text-white">Title Page</p>
                </label>
            </div>

        </div>
    )
}

function WorkSpace() {
    return (
        <div className="flex ">
            <MenuBar />
        </div>
    )
}

export default WorkSpace;