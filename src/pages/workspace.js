import React, { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp, FileMenu, FileText, MsgCircle, MsgSquare, OptionIcon, ShuffleIcon, VoiceMemo } from "../components/Svg";
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
        <div className="w-[20rem] bg-[#161616] h-[calc(100vh-112px)] relative select-none">
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
            <div className="flex flex-col pl-2 pr-2 w-full" >
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
        <div >

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
        <div className="w-[20rem] bg-[#161616] min-h-[calc(100vh-112px)] relative select-none">
            <div className="tabs w-full border-b border-gray-600 pt-2">
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
            <div className="bg-slate-500 w-full ">
                {value === 0 && <div>0</div>}
                {value === 1 && <div>1</div>}
                {value === 2 && <div>2</div>}
                {value === 3 && <div>3</div>}
            </div>
        </div>
    )
}

function WorkSpace() {
    return (
        <div className="flex justify-between">
            <MenuBar />
            <EditorSection />
            <ToolBar />
        </div>
    )
}

export default WorkSpace;