import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";


interface AppWindowProps {
    WindowState: boolean;
    setWindow: React.Dispatch<React.SetStateAction<boolean>>;
    OpenApp: React.ComponentType;
}





function AppWindow({ WindowState, setWindow, OpenApp }: AppWindowProps) {
    const [WindowMinimizeState, setWindowMinimizeState] = useState<Boolean>(WindowState)

    useEffect(() => {
        setWindowMinimizeState(WindowState)
    }, [WindowState])

    return (
        <>
            {WindowMinimizeState && (<Rnd className="AppWindow" default={{ x: 440, y: 160, width: 800, height: 500 }} enableResizing={{
                top: true,
                bottom: true,
                left: true,
                right: true,
                topLeft: true,
                topRight: true,
                bottomLeft: true,
                bottomRight: true
            }} cancel=".content" >
                <div style={{ height: "100%" }} className="MainAppContainer rounded-md  text-white shadow-lg flex-col flex  ">
                    <div className="rounded-t-md TopHead  flex flex-row items-center justify-center">
                        <h1 className="font-bold relative left-[5%]">File</h1>
                        <div className="relative flex items-center gap-[60%] left-[40%]">
                            <img className="cursor-pointer" src="/icons/Minimize.svg" alt="" onClick={() => setWindow(!WindowState)} />
                            <img className="cursor-pointer" src="/icons/close.svg" alt="" />
                        </div>
                    </div>
                    <div className="content h-[100%]">

                        <OpenApp/>

                    </div>
                </div>
            </Rnd>)}</>
    )
}

export default AppWindow