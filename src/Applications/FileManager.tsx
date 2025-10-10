// @ts-ignore
import { FileManager } from "@cubone/react-file-manager";
import "@cubone/react-file-manager/dist/style.css";
import "./css/FileManagerStyles.css"
import { useState } from "react";
import AppWindow from "@/component/AppWindow";



function FilePreview({ file }: any) {
    console.log(file)
    return (

        <img src={file.path} alt="" />
    )
}

function Filemanager() {
    const [PrevieState, setPrevieState] = useState(false)
    const [fileObj, setfileObj] = useState("")
    const [files] = useState([
        {
            name: "Documents",
            isDirectory: true, // Folder
            path: "/Documents", // Located in Root directory
            updatedAt: "2024-09-09T10:30:00Z", // Last updated time
        },
        {
            name: "public",
            isDirectory: true,
            path: "/public", // Located in Root directory as well
            updatedAt: "2024-09-09T11:00:00Z",
        },
        {
            name: "4.jpg",
            isDirectory: false, // File
            path: "/4.jpg", // Located inside the "Pictures" folder
            updatedAt: "2024-09-08T16:45:00Z",
            size: 2048, // File size in bytes (example: 2 KB)
        },
    ]);
    return (
        <>
            <FileManager onFileOpen={(file: any) => { setPrevieState(!PrevieState), setfileObj(file) }} cssClass="my-bark-file-manager" enableFilePreview={false} files={files} filePreviewPath="" />
            <AppWindow WindowState={PrevieState} setWindow={setPrevieState} OpenApp={() => <FilePreview file={fileObj} />} /></>
    )
}

export default Filemanager