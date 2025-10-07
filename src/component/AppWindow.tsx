import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";



interface AppWindowProps {
    WindowState: boolean;
    setWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppWindow({ WindowState, setWindow }: AppWindowProps) {
    const [WindowMinimizeState, setWindowMinimizeState] = useState<Boolean>(WindowState)
    const [value, setValue] = useState("");
    

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
            }} >
                <div style={{ border: "solid red", height: "100%" }} className="bg-black/90 rounded-md  text-white shadow-lg flex-col flex  ">
                    <div style={{ border: "solid red" }} className="TopHead flex flex-row items-center justify-center">
                        <h1 className="font-bold relative left-[9%]">Hii</h1>
                        <div className="relative left-[40%]">
                            <Button onClick={() => setWindow(!WindowState)}>Minimize</Button>
                            <Button >Click</Button>
                        </div>
                    </div>
                    <div style={{ border: "solid blue" }} className="h-[100%]">
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type.." />
                        Your App Window
                    </div>
                </div>
            </Rnd>)}</>
    )
}

export default AppWindow