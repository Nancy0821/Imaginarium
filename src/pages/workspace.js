import React, { useState, useRef, useEffect } from "react";
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, ChevronDown, ChevronRight, ChevronUp, ConstBotIcon, ConstMidIcon, ConstTopIcon, DropDownIcon, FileMenu, FileText, FontCaseCapsIcon, FontCaseDefaultIcon, FontCaseHighSmallCapsIcon, FontCaseSmallCaps, FontCaseSmallIcon, FontDotLineIcon, FontOverlineIcon, FontStrikethroughIcon, FontUnderLineIcon, FontWrongLineIcon, IndentIcon, LetterSpacingIcon, LineHeightIcon, ListDiffIcon, ListIcon, ListNumIcon, ListRowIcon, ListSquareIcon, MsgCircle, MsgSquare, OptionIcon, PHeightIcon, PlusIcon, RightIndentIcon, ShuffleIcon, TimesIcon, VoiceMemo } from "../components/Svg";
import { values } from "lodash";

const MenuData = {
    '/001': {
        path: '/001',
        name: "Act 1",
        depth: 0,
        children: ['/001/001', '/001/002', '/001/003', '/001/004', '/001/005', '/001/006', '/001/007', '/001/008', '/001/009', '/001/010']
    },
    '/001/001': {
        path: '/001/001',
        name: "Scene 1",
        depth: 1,
        avatar: ["assets/img/dashboard/Avatar16.png"]
    },
    '/001/002': {
        path: '/001/002',
        name: "Scene 2",
        depth: 1,
        avatar: [],
    },
    '/001/003': {
        path: '/001/003',
        name: "Scene 3 - A New Order",
        depth: 1,
        avatar: ["assets/img/dashboard/Avatar15.png", "assets/img/dashboard/Avatar14.png"],
    },
    '/001/004': {
        path: '/001/004',
        name: "Scene 4",
        depth: 1,
        avatar: [],
    },
    '/001/005': {
        path: '/001/005',
        name: "Scene 5",
        depth: 1,
        avatar: [],
    },
    '/001/006': {
        path: '/001/006',
        name: "Scene 6",
        depth: 1,
        avatar: [],
    },
    '/001/007': {
        path: '/001/007',
        name: "Scene 7",
        depth: 1,
        avatar: [],
    },
    '/001/008': {
        path: '/001/008',
        name: "Scene 8",
        depth: 1,
        avatar: [],
    },
    '/001/009': {
        path: '/001/009',
        name: "Scene 9",
        depth: 1,
        avatar: [],
    },
    '/001/010': {
        path: '/001/010',
        name: "Scene 10",
        depth: 1,
        avatar: [],
    },
    '/002': {
        path: '/002',
        name: 'Act 2',
        depth: 0,
        avatar: [],
        children: ['/002/001'],

    },
    '/002/001': {
        path: '/002/001',
        name: "Scene 1",
        depth: 1,
        avatar: [],
    },
    '/003': {
        path: '/003',
        name: 'Act 3',
        depth: 0,
        avatar: [],
        children: ['/003/001',],

    },
    '/003/001': {
        path: '/003/001',
        name: "Scene 1",
        depth: 1,
        avatar: [],
    },
    '/004': {
        path: '/004',
        name: 'Act 4',
        depth: 0,
        avatar: [],
        children: ['/004/001']

    },
    '/004/001': {
        path: '/004/001',
        name: "Scene 1",
        depth: 1,
        avatar: [],
    }
}

const RenderTree = (props) => {
    const { node, onToggle, getChildNodes } = props;
    return (
        <>

            {node.depth === 0 ?
                <div className=" cursor-pointer rounded-md text-sm w-full hover:bg-[#404040]  select-none" onClick={() => onToggle(node)} >
                    <div className="flex flex-row   items-center gap-3 px-1 py-2 ml-2 ">
                        {
                            node.isOpen ? <ChevronDown /> : <ChevronRight />
                        }
                        {node.name}
                    </div>
                </div>
                :
                <div className="flex flex-row text-sm items-center gap-3 px-1 py-2 ml-7 hover:bg-[#404040]  rounded-md justify-between select-none">
                    {node.name}
                    <div className="flex gap-1">
                        {
                            node.avatar.map((icon, index) => (
                                <div className="avatar placeholder" key={index}>
                                    <div className="bg-[#2b2b2b] text-white rounded-full w-5 ">
                                        <img src={icon} alt="avatar" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            {
                node.isOpen && getChildNodes(node).map((children, index) => (
                    <RenderTree {...props} node={children} key={index} />
                ))
            }
        </>
    )
}

const MenuBar = () => {
    const [treeItem, setTreeItem] = useState(
        MenuData
    );
    const getRootNodes = () => {
        const treeItems = treeItem;
        return values(treeItems).filter(node => node.depth === 0);
    }
    const getChildNodes = (node) => {
        const treeItems = treeItem;
        if (!node.children) return [];
        return node.children.map(path => treeItems[path]);
    }

    const onToggle = (node) => {
        const treeItems = treeItem;
        treeItems[node.path].isOpen = !node.isOpen;
        setTreeItem({ ...treeItems });
    }
    return (
        <div className="w-[20rem] bg-[#161616] min-h-[calc(100vh-112px)] relative select-none ">
            <div className="flex flex-col items-start pl-3 pt-3 pr-2 pb-3 border-b border-gray-600">
                <label className="flex flex-row justify-center items-center gap-4 px-1 py-2">
                    <FileMenu />
                    <p className="text-xs text-white font-normal">PROJECT STRUCTURE</p>
                </label>
            </div>
            <div className="flex flex-col items-start pl-3 pt-3 pr-2 pb-3">
                <label className="flex flex-row items-center gap-3 px-1 py-2">
                    <FileText />
                    <p className="text-sm text-white">Title Page</p>
                </label>
            </div>
            <div className="flex flex-col pl-2 pr-2 w-full max-h-[calc(100vh-270px)] overflow-y-auto" >
                {
                    getRootNodes(treeItem).map((node, index) => (
                        <RenderTree node={node} getChildNodes={getChildNodes} onToggle={onToggle} key={index} />
                    ))
                }
            </div>
            <div className="absolute bottom-0 w-full select-none">
                <div className="border-[1px] border-[#262626]" />
                <div className="pl-3 pr-2 pb-1 flex items-center justify-between">
                    <label className="flex flex-row items-center gap-3 px-1 py-2">
                        <MsgSquare />
                        <p className="text-xs text-white font-normal">COLLABORATION CHAT</p>
                        <div className="badge badge-secondary text-xs">999</div>
                    </label>
                    <ChevronUp />
                </div>
            </div>
        </div>
    )
}

const EditorSection = () => {


    return (
        <div className="flex justify-center max-h-[calc(100vh-112px)] w-[65%] overflow-y-auto ">
            <textarea className="w-[806px] h-[1142px] border-none mt-[3rem] bg-[#2B2B2B] resize-none text-white" />
        </div>
    );
}

const Optional = () => {
    const [openAct, setOpenAct] = useState(false);
    const [initAct, setInitAct] = useState("Headerline 1");
    const [colorVal, setColorVal] = useState("#FFFFFF");
    const [lineH, setLineH] = useState(72);
    const [letterSpc, setLetterSpc] = useState(72);
    const [align, setAlign] = useState(1);
    const [Constrain, setConstrain] = useState(1);
    const [Paragraph, setParagraph] = useState(1);
    const [pHeight, setPHeight] = useState(999);
    const [indent, setIndent] = useState(999);
    const [pLeft, setPLeft] = useState(999);
    const [pRight, setPRight] = useState(999);
    const [pList, setPList] = useState(1);
    const [decoration, setDecoration] = useState(1);
    const [pCase, setPCase] = useState(1);

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
                                    {initAct}
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
                            className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-3 shadow bg-[#161616] border border-[#464646] w-full h-32 rounded-[4px]"
                        >
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={() => {
                                    setInitAct("School 1");
                                    setOpenAct(false);
                                }}
                            >
                                School 1
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={() => {
                                    setInitAct("School 2");
                                    setOpenAct(false);
                                }}
                            >
                                School 2
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={() => {
                                    setInitAct("School 3");
                                    setOpenAct(false);
                                }}
                            >
                                School 3
                            </li>
                            <li
                                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                onClick={() => {
                                    setInitAct("Custom");
                                    setOpenAct(false);
                                }}
                            >
                                Custom
                            </li>
                        </ul>
                    ) : null}
                </div>
                <div className="flex justify-between items-center p-0 gap-1 h-8 w-full">
                    <label className="text-sm text-white leading-5">
                        Medium
                    </label>
                    <div className="flex flex-row items-center justify-between p-1 pr-2  h-full w-24 bg-[#0E0E0E] rounded relative">
                        <input type="color" value={colorVal} onChange={(e) => setColorVal(e.target.value)} className="w-0 h-0 z-[-1] ml-[-9px]" id="color-picker" />
                        <div className="w-6 h-6 rounded" style={{ background: colorVal }} />

                        <label htmlFor="color-picker" className="text-xs text-[#cdcdcd] uppercase">
                            {colorVal}
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
                    <input id="small-range" type="range" className=" w-40 rounded-lg appearance-none cursor-pointer h-[2px] bg-blue-100" />
                    <div className="flex flex-row justify-center rounded border border-[#404040] items-center p-1  gap-2 w-[72px] h-full bg-[#0E0E0E]">
                        <label className="text-sm text-white">72</label>
                        <label className="text-sm">rem</label>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between p-0 gap-3 w-full h-8 ">
                    <label className="uppercase w-12 h-5 text-[10px] tracking-widest text-gray-400 flex items-center ">Weight</label>
                    <input id="small-range" type="range" className=" w-40 rounded-lg appearance-none cursor-pointer h-[2px] bg-[#5F5F5F]" disabled />
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
                            <input id="lineheihgt-text" type="text" value={lineH} onChange={(e) => setLineH(e.target.value)} min={"0"} max={"100"} className="w-12 h-full bg-[#0E0E0E] border-none text-sm text-white " />
                            <label htmlFor="lineheihgt-text" className="text-[#5F5F5F] text-sm "> rem</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <LetterSpacingIcon />
                        </div>
                        <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
                            <label htmlFor="spacing-text" className="uppercase text-[#CDCDCD] text-[9px] ">Char</label>
                            <input id="spacing-text" type="text" value={letterSpc} onChange={(e) => setLetterSpc(e.target.value)} min={"0"} max={"100"} className="w-12 h-full bg-[#0E0E0E] border-none text-sm text-white " />
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
                                (align === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setAlign(1);
                            }}
                        >
                            <AlignLeftIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (align === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setAlign(2);
                            }}
                        >
                            <AlignCenterIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (align === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setAlign(3);
                            }}
                        >
                            <AlignRightIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (align === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setAlign(4);
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
                                (Constrain === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setConstrain(1);
                            }}
                        >
                            <ConstBotIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (Constrain === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setConstrain(2);
                            }}
                        >
                            <ConstMidIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (Constrain === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setConstrain(3);
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
                                (Paragraph === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setParagraph(1);
                            }}
                        >
                            RTL
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (Paragraph === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setParagraph(2);
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
                            <input id="height-text" type="text" value={pHeight} onChange={(e) => setPHeight(e.target.value)} className="w-[50px] h-full bg-[#0E0E0E] border-none text-sm text-white " />
                            <label htmlFor="height-text" className="text-[#5F5F5F] text-sm"> px</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <IndentIcon />
                        </div>
                        <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
                            <label htmlFor="indent-text" className="uppercase text-[#CDCDCD] text-[9px] ">Indent</label>
                            <input id="indent-text" type="text" value={indent} onChange={(e) => setIndent(e.target.value)} min={"0"} max={"100"} className="w-[50px] h-full bg-[#0E0E0E]  border-none text-sm text-white " />
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
                            <input id="leftindent-text" type="text" value={pLeft} onChange={(e) => setPLeft(e.target.value)} className="w-[50px] h-full bg-[#0E0E0E] border-none text-sm text-white " />
                            <label htmlFor="leftindent-text" className="text-[#5F5F5F] text-sm"> px</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
                        <div className="w-5 h-5">
                            <RightIndentIcon />
                        </div>
                        <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
                            <label htmlFor="right-indent" className="uppercase text-[#CDCDCD] text-[9px] ">Right</label>
                            <input id="right-indent" type="text" value={pRight} onChange={(e) => setPRight(e.target.value)} min={"0"} max={"100"} className="w-[50px] h-full bg-[#0E0E0E]  border-none text-sm text-white " />
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
                                (pList === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPList(1);
                            }}
                        >
                            <TimesIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pList === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPList(2);
                            }}
                        >
                            <ListIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pList === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPList(3);
                            }}
                        >
                            <ListNumIcon />

                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pList === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPList(4);
                            }}
                        >
                            <ListSquareIcon />

                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pList === 5 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPList(5);
                            }}
                        >
                            <ListRowIcon />

                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pList === 6 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPList(6);
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
                                (decoration === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setDecoration(1);
                            }}
                        >
                            <TimesIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (decoration === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setDecoration(2);
                            }}
                        >
                            <FontUnderLineIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (decoration === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setDecoration(3);
                            }}
                        >
                            <FontStrikethroughIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (decoration === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setDecoration(4);
                            }}
                        >
                            <FontOverlineIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (decoration === 5 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setDecoration(5);
                            }}
                        >
                            <FontWrongLineIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (decoration === 6 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setDecoration(6);
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
                                (pCase === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPCase(1);
                            }}
                        >
                            <TimesIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pCase === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPCase(2);
                            }}
                        >
                            <FontCaseDefaultIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pCase === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPCase(3);
                            }}
                        >
                            <FontCaseCapsIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pCase === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPCase(4);
                            }}
                        >
                            <FontCaseSmallIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pCase === 5 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPCase(5);
                            }}
                        >
                            <FontCaseHighSmallCapsIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (pCase === 6 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setPCase(6);
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

const ToolBar = () => {
    const [value, setValue] = useState(0);
    const handleClick = (val) => (event) => {
        event.preventDefault();
        setValue(val);
    }
    const tabClass = (val) => {
        return `tab ` + (value === val ? "border-b-2 tab-bordered border-cyan-500 text-white" : "");
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
                {value === 1 && <Optional />}
                {value === 2 && <div></div>}
                {value === 3 && <div></div>}
            </div>
        </div>
    )
}

function WorkSpace() {
    return (
        <div className="flex justify-between bg-[#0A0A0A]">
            <MenuBar />
            <EditorSection />
            <ToolBar />
        </div>
    )
}

export default WorkSpace;