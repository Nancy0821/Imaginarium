import React, { useState } from "react";

import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, ChevronRight, ConstBotIcon, ConstMidIcon, ConstTopIcon, DropDownIcon, FontCaseCapsIcon, FontCaseDefaultIcon, FontCaseHighSmallCapsIcon, FontCaseSmallCaps, FontCaseSmallIcon, FontDotLineIcon, FontOverlineIcon, FontStrikethroughIcon, FontUnderLineIcon, FontWrongLineIcon, IndentIcon, LetterSpacingIcon, LineHeightIcon, ListDiffIcon, ListIcon, ListNumIcon, ListRowIcon, ListSquareIcon, PHeightIcon, PlusIcon, RightIndentIcon, TimesIcon } from "../../../Svg";

const Optional = (props) => {
    const { state, setState } = props;
    const [openAct, setOpenAct] = useState(false);
    const fontRangeRef = useRef(null);

    const fontSizeChange = (e) => {
        let size = e.target.value;
        setState({ ...state, fSize: size });
    }

    const handleLineH = (e) => {
        let val = e.target.value;
        setState({ ...state, lineH: val })
    }


    return (
        <div>
            <div className="flex flex-col items-start gap-2 p-4 border-b border-[#262626]">
                <div className="dropdown w-full">
                    <div
                        tabIndex="0"
                        className="px-2 py-1.5 h-8 bg-[#161616] border border-[#404040] rounded-[4px]"
                        name="projects"
                        id="projects"
                        onClick={() => {
                            setOpenAct(true);
                        }}
                    >
                        <div className="flex justify-between ">
                            <div className="flex gap-2">
                                <label className="text-center text-white text-[16px] leading-5 mt-[-1px]">
                                    Ag
                                </label>
                                <label className="text-center text-white text-[12px] leading-5">
                                    {state.initAct}
                                </label>
                            </div>

                            <button>
                                <DropDownIcon />
                            </button>
                        </div>
                    </div>

                    {openAct ? (
                        <ul
                            tabIndex="0"
                            className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-3 shadow bg-[#161616] border border-[#464646] w-full h-56 rounded-[4px]"
                        >
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={(e) => {
                                    setState({ ...state, initAct: e.currentTarget.textContent })
                                    setOpenAct(false);
                                }}
                            >
                                None
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={(e) => {
                                    setState({ ...state, initAct: e.currentTarget.textContent })
                                    setOpenAct(false);
                                }}
                            >
                                Headerline 1
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={(e) => {
                                    setState({ ...state, initAct: e.currentTarget.textContent })
                                    setOpenAct(false);
                                }}
                            >
                                Headerline 2
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={(e) => {
                                    setState({ ...state, initAct: e.currentTarget.textContent })
                                    setOpenAct(false);
                                }}
                            >
                                Headerline 3
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={(e) => {
                                    setState({ ...state, initAct: e.currentTarget.textContent })
                                    setOpenAct(false);
                                }}
                            >
                                Headerline 4
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={(e) => {
                                    setState({ ...state, initAct: e.currentTarget.textContent })
                                    setOpenAct(false);
                                }}
                            >
                                Headerline 5
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={(e) => {
                                    setState({ ...state, initAct: e.currentTarget.textContent })
                                    setOpenAct(false);
                                }}
                            >
                                Headerline 6
                            </li>

                        </ul>
                    ) : null}
                </div>
                <div className="flex justify-between items-center p-0 gap-1 h-8 w-full">
                    <label className="text-sm text-white leading-5">
                        Medium
                    </label>
                    <div className="flex flex-row items-center justify-between p-1 pr-2  h-full w-24 bg-[#0E0E0E] rounded relative">
                        <input type="color" value={state.colorVal} onChange={(e) => setState({ ...state, colorVal: e.target.value })} className="w-0 h-0 z-[-1] ml-[-9px]" id="color-picker" />
                        <label htmlFor="color-picker" className="cursor-pointer"><div className="w-6 h-6 rounded" style={{ background: state.colorVal }} /></label>
                        <label htmlFor="color-picker" className="text-xs text-[#cdcdcd] cursor-pointer uppercase">
                            {state.colorVal}
                        </label>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full pl-[12px] p-[6px] rounded cursor-pointer border border-[#404040] relative">
                    <label className="uppercase text-white w-[calc(100%-20px)] cursor-pointer text-[12px] leading-5 tracking-wider text-center">Open Style Editor</label>
                    <button className="absolute right-0 flex items-end w-5">
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2 p-4 border-b border-[#262626]">
                <div className="flex flex-row items-center justify-between p-0 gap-3 w-full h-8">
                    <label className="uppercase w-12 h-5 text-[10px] tracking-widest text-white flex items-center gap-1">Size</label>
                    <input id="fontRange" ref={fontRangeRef} type="range" value={state.fSize} className=" w-40 rounded-lg appearance-none cursor-pointer h-[2px] bg-blue-100" onChange={(e) => { fontSizeChange(e) }} />
                    <div className="flex flex-row justify-center rounded border border-[#404040] items-center p-1  gap-2 w-[72px] h-full bg-[#0E0E0E]">
                        <label className="text-sm text-white">{state.fSize}</label>
                        <label className="text-sm">rem</label>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between p-0 gap-3 w-full h-8 ">
                    <label className="uppercase w-12 h-5 text-[10px] tracking-widest text-gray-400 flex items-center ">Weight</label>
                    <input id="weightRange" type="range" className=" w-40 rounded-lg appearance-none cursor-pointer h-[2px] bg-[#5F5F5F]" disabled />
                    <div className="flex flex-row justify-center rounded border border-[#404040] items-center p-1  gap-2 w-[72px] h-full bg-[#161616]">
                        <label className="text-sm text-gray">72</label>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between  p-0 gap-4 w-full h-8">
                    <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <LineHeightIcon />
                        </div>
                        <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
                            <label htmlFor="lineheihgt-text" className="uppercase text-[#CDCDCD] text-[9px]">Line</label>
                            <input min={1} max={99} id="lineheihgt-text" type="number" value={state.lineH} onChange={(e) => handleLineH(e)} className="w-12 h-full bg-[#0E0E0E] border-none text-sm text-white " />
                            <label htmlFor="lineheihgt-text" className="text-[#5F5F5F] text-sm "> rem</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <LetterSpacingIcon />
                        </div>
                        <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
                            <label htmlFor="spacing-text" className="uppercase text-[#CDCDCD] text-[9px] ">Char</label>
                            <input min={1} max={99} id="spacing-text" type="number" value={state.letterSpc} onChange={(e) => setState({ ...state, letterSpc: e.target.value })} className="w-12 h-full bg-[#0E0E0E] border-none text-sm text-white " />
                            <label htmlFor="spacing-text" className="text-[#5F5F5F] text-sm"> rem</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start p-4 gap-2 border-b border-[#262626]">
                <div className="flex flex-row justify-between items-center w-full">
                    <label className="uppercase text-xs text-white" >Alignment</label>
                    <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-fit h-8 p-1 rounded-md">
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.align === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, align: 1 })
                            }}
                        >
                            <AlignLeftIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.align === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, align: 2 })
                                console.log("AlignCenterIcon")
                            }}
                        >
                            <AlignCenterIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.align === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, align: 3 })
                            }}
                        >
                            <AlignRightIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.align === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, align: 4 })
                            }}
                        >
                            <AlignJustifyIcon />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <label className="uppercase text-xs text-white" >Constrain</label>
                    <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-fit h-8 p-1 rounded-md">
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.Constrain === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, Constrain: 1 })
                            }}
                        >
                            <ConstBotIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.Constrain === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, Constrain: 2 })
                            }}
                        >
                            <ConstMidIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.Constrain === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, Constrain: 3 })
                            }}
                        >
                            <ConstTopIcon />
                        </button>
                    </div>
                </div>

            </div>
            <div className=" flex flex-col items-start p-4 gap-2 border-b border-[#262626]">
                <div className="flex flex-row justify-between items-center w-full ">
                    <label className="uppercase text-xs text-white" >Paragraph</label>
                    <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-fit h-8 p-1 rounded-md">
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.Paragraph === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, Paragraph: 1 })
                            }}
                        >
                            RTL
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.Paragraph === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, Paragraph: 2 })
                            }}
                        >
                            LTR
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between p-0 gap-4 w-full h-8">
                    <div className="flex justify-between items-center p-1 pr-2 gap-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <PHeightIcon />
                        </div>
                        <div className="flex items-center p-0 justify-between w-[calc(100%-36px)] h-5">
                            <label htmlFor="height-text" className="uppercase text-[#CDCDCD] text-[9px] ">Height</label>
                            <input min={1} max={999} id="height-text" type="number" value={state.pHeight} onChange={(e) => setState({ ...state, pHeight: e.target.value })} className="w-[50px] h-full bg-[#0E0E0E] border-none text-sm text-white " />
                            <label htmlFor="height-text" className="text-[#5F5F5F] text-sm"> px</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <IndentIcon />
                        </div>
                        <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
                            <label htmlFor="indent-text" className="uppercase text-[#CDCDCD] text-[9px] ">Indent</label>
                            <input min={1} max={999} id="indent-text" type="number" value={state.indent} onChange={(e) => setState({ ...state, indent: e.target.value })} className="w-[50px] h-full bg-[#0E0E0E]  border-none text-sm text-white " />
                            <label htmlFor="indent-text" className="text-[#5F5F5F] text-sm"> px</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between p-0 gap-4 w-full h-8">
                    <div className="flex justify-between items-center p-1 pr-2 gap-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <IndentIcon />
                        </div>
                        <div className="flex items-center p-0 justify-between w-[calc(100%-36px)] h-5">
                            <label htmlFor="leftindent-text" className="uppercase text-[#CDCDCD] text-[9px] ">Left</label>
                            <input min={1} max={999} id="leftindent-text" type="number" value={state.pLeft} onChange={(e) => setState({ ...state, pLeft: e.target.value })} className="w-[50px] h-full bg-[#0E0E0E] border-none text-sm text-white " />
                            <label htmlFor="leftindent-text" className="text-[#5F5F5F] text-sm"> px</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <RightIndentIcon />
                        </div>
                        <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
                            <label htmlFor="right-indent" className="uppercase text-[#CDCDCD] text-[9px] ">Right</label>
                            <input min={1} max={"999"} id="right-indent" type="number" value={state.pRight} onChange={(e) => setState({ ...state, pRight: e.target.value })} className="w-[50px] h-full bg-[#0E0E0E]  border-none text-sm text-white " />
                            <label htmlFor="right-indent" className="text-[#5F5F5F] text-sm"> px</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-start p-4 gap-2 border-b border-[#262626]">
                <div className="flex flex-row justify-between items-center w-full cursor-pointer">
                    <label className="uppercase text-xs text-white" >List</label>
                    <div className="flex flex-row items-center justify-between p-1 pr-2  h-full w-[84px] bg-[#0E0E0E] rounded cursor-pointer">
                        <input type="file" className="hidden" id="input-file" />
                        <label htmlFor="input-file">
                            <div className="cursor-pointer w-6 h-6 rounded bg-[#2B2B2B] flex justify-center items-center">
                                <PlusIcon />
                            </div>
                        </label>
                        <label htmlFor="input-file" className="cursor-pointer text-xs text-[#cdcdcd] uppercase">
                            Image
                        </label>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full ">
                    <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-full h-8 p-1 rounded-md">
                        <button
                            className={
                                "h-6 px-4 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pList === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pList: 1 })
                            }}
                        >
                            <TimesIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pList === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pList: 2 })
                            }}
                        >
                            <ListIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pList === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pList: 3 })
                            }}
                        >
                            <ListNumIcon />

                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pList === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pList: 4 })
                            }}
                        >
                            <ListSquareIcon />

                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pList === 5 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pList: 5 })
                            }}
                        >
                            <ListRowIcon />

                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pList === 6 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pList: 6 })
                            }}
                        >
                            <ListDiffIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-start p-4 gap-3 border-b border-[#262626]">
                <div className="flex flex-row justify-between items-center w-full">
                    <label className="uppercase text-xs text-white" >Decoration</label>
                </div>
                <div className="flex flex-row justify-between  items-center w-full ">
                    <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-full h-8 p-1 rounded-md">
                        <button
                            className={
                                "h-6 px-4 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.decoration === "UNDERLINE" ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, decoration: "UNDERLINE" })
                            }}
                        >
                            <TimesIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.decoration === "2" ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, decoration: "2" })
                            }}
                        >
                            <FontUnderLineIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.decoration === "3" ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, decoration: "3" })
                            }}
                        >
                            <FontStrikethroughIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.decoration === "4" ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, decoration: "4" })
                            }}
                        >
                            <FontOverlineIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.decoration === "5" ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, decoration: "5" })
                            }}
                        >
                            <FontWrongLineIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.decoration === "6" ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, decoration: "6" })
                            }}
                        >
                            <FontDotLineIcon />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-between  items-center w-full ">
                    <label className="uppercase text-xs text-white" >Case</label>
                    <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-56 h-8 p-1 rounded-md">
                        <button
                            className={
                                "h-6 px-2 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pCase: 1 })
                            }}
                        >
                            <TimesIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pCase: 2 })
                            }}
                        >
                            <FontCaseDefaultIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pCase: 3 })
                            }}
                        >
                            <FontCaseCapsIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pCase: 4 })
                            }}
                        >
                            <FontCaseSmallIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 5 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pCase: 5 })
                            }}
                        >
                            <FontCaseHighSmallCapsIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 6 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, pCase: 6 })
                            }}
                        >
                            <FontCaseSmallCaps />
                        </button>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-start p-4 gap-3 border-b border-[#262626]">
                <div className="flex justify-between items-center w-full pl-[12px] p-[6px] rounded cursor-pointer border border-[#404040] relative">
                    <label className="uppercase text-white w-[calc(100%-20px)] cursor-pointer text-[12px] leading-5 tracking-wider text-center">Open font type feature</label>
                    <button className="absolute right-0 flex items-end w-5">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Optional;