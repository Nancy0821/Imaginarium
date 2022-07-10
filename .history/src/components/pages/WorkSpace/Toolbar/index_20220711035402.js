import React, { useState } from "react";
import { MsgCircle, OptionIcon } from "../../../Svg";

const ToolBar = (props) => {
    const [value, setValue] = useState(0);
    const { state, setState } = props;
    const handleClick = (val) => (event) => {
        event.preventDefault();
        setValue(val);
    }
    const tabClass = (val) => {
        return `tab text-[#5F5F5F]` + (value === val ? "border-b-2 tab-bordered border-cyan-500 text-white" : "");
    }
    return (
        <div className="w-[24rem] bg-[#161616]  relative select-none">
            <div className="tabs w-full border-b border-[#262626] pt-2">
                <div className={tabClass(0)} onClick={handleClick(0)}>
                    <ShuffleIcon />
                </div>
                <div className={tabClass(1)} onClick={handleClick(1)}>
                    <OptionIcon />
                </div>
                <div className={tabClass(2)} onClick={handleClick(2)}>
                    <MsgCircle />
                </div>
                <div className={tabClass(3)} onClick={handleClick(3)}>
                    <VoiceMemo />
                </div>
            </div>
            <div className="w-full max-h-[calc(100vh-154px)] overflow-y-auto">
                {value === 0 && <div></div>}
                {value === 1 && <Optional state={state} setState={setState} />}
                {value === 2 && <div></div>}
                {value === 3 && <div></div>}
            </div>
        </div>
    )
}

export default ToolBar;