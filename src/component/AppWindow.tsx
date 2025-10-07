import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
// @ts-ignore
import { FileManager } from "@cubone/react-file-manager";
import "@cubone/react-file-manager/dist/style.css";
import "./css/FileManagerStyles.css"

interface AppWindowProps {
    WindowState: boolean;
    setWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppWindow({ WindowState, setWindow }: AppWindowProps) {
    const [WindowMinimizeState, setWindowMinimizeState] = useState<Boolean>(WindowState)
    const [value, setValue] = useState("");
    const [files, setFiles] = useState([
        {
            name: "Documents",
            isDirectory: true, // Folder
            path: "/Documents", // Located in Root directory
            updatedAt: "2024-09-09T10:30:00Z", // Last updated time
        },
        {
            name: "Pictures",
            isDirectory: true,
            path: "/Pictures", // Located in Root directory as well
            updatedAt: "2024-09-09T11:00:00Z",
        },
        {
            name: "Pic.png",
            isDirectory: false, // File
            path: "/Pictures/Pic.png", // Located inside the "Pictures" folder
            updatedAt: "2024-09-08T16:45:00Z",
            size: 2048, // File size in bytes (example: 2 KB)
        },
    ]);

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
                <div style={{height: "100%" }} className="MainAppContainer rounded-md  text-white shadow-lg flex-col flex  ">
                    <div  className="rounded-t-md TopHead  flex flex-row items-center justify-center">
                        <h1 className="font-bold relative left-[9%]">File</h1>
                        <div className="relative left-[40%]">
                            {/* <Button onClick={() => setWindow(!WindowState)}>Minimize</Button>
                            <Button >Click</Button> */}
                        </div>
                    </div>
                    <div  className="content h-[100%]">
                        <FileManager cssClass="my-bark-file-manager" files={files} />
                    </div>
                </div>
            </Rnd>)}</>
    )
}

export default AppWindow