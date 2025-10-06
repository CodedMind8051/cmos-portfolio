import { Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";

function AppWindow() {
    const [WindowCloseState, setWindowCloseState] = useState<Boolean>(true)
    const [WindowMinimizeState, setWindowMinimizeState] = useState<Boolean>(false)
    const AppWindowRef = useRef<any>(null)


    useEffect(() => {
        if (WindowMinimizeState) {
            // console.log()
            AppWindowRef.current.style.background="red"
        } else {

        }



    }, [WindowMinimizeState])
 AppWindowRef.current.style.background="red"

    return (
        <>
            {WindowCloseState && (<Rnd  className="AppWindow" default={{ x: 440, y: 160, width: 800, height: 500 }} enableResizing={{
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
                            <Button onClick={() => setWindowCloseState(false)}>Click</Button>
                            <Button ref={AppWindowRef} onClick={() => { setWindowMinimizeState(true) }}>Minimize</Button>
                        </div>
                    </div>
                    <div style={{ border: "solid blue" }} className="h-[100%]">
                        Your App Window
                    </div>
                </div>
            </Rnd>)}</>
    )
}

export default AppWindow