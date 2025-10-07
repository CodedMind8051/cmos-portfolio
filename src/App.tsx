import './App.css'
import BarBox from './component/structure/BarBox'
import TopBox from "./component/structure/TopBox"
import GlassCard from "./component/GlassCard"
import { ThemeProvider } from "../themeProvider"
import AppWindow from './component/AppWindow'
import { useEffect, useState } from 'react'
import { Button } from '@mantine/core'



function App() {
  const [Window, setWindow] = useState(false)
  useEffect(() => {
    console.log(Window)
  }, [Window])


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <>
        <div className='MainWindow'>
          <BarBox />
          <div style={{ display: "flex ", width: "100%", flexDirection: "column" }}>
            <TopBox />
            <AppWindow WindowState={Window} setWindow={setWindow} />
            <Button onClick={() => { Window ? setWindow(false) : setWindow(true) }} >Click</Button>
            <GlassCard links={[{ link: "/icons/folderWhite.svg", bg: "#c01d1c", hovertext: "Projects" }, { link: "icons/terminal.svg", bg: "black", hovertext: "Terminal" }, { link: "icons/notes.png", bg: "#eed509b8", hovertext: "Notes" }, { link: "/icons/CodedMind2.png", bg: "black", hovertext: "About me" }, { link: "/icons/photos.png", bg: "white", hovertext: "Photos" }, { link: "/icons/settings.png", bg: "#3d403f", hovertext: "Settings" }, { link: "/icons/github.png", bg: "black", hovertext: "Github" }]} />
          </div>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
