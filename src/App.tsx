import './App.css'
import BarBox from './component/structure/BarBox'
import TopBox from "./component/structure/TopBox"
import GlassCard from "./component/GlassCard"
import { ThemeProvider } from "../themeProvider"
import AppWindow from './component/AppWindow'
import { useState } from 'react'
import Filemanager from './Applications/FileManager'
import {TerminalSimulator} from './Applications/Terminal'


const ConvertToComponent = (id: string | null | React.ComponentType): React.ComponentType | null => {
  switch (id) {
    case "Filemanager":
      return Filemanager;
    case "termial":
      return null;
    case "notes":
      return null;
    case "about-me":
      return null;
    case "photos":
      return null;
    case "settings":
      return null;
    case "github":
      return null;
    default:
      return null;
  }
}

function App() {
  const [Window, setWindow] = useState(false)
  const [OpenApp, setOpenApp] = useState<React.ComponentType | null>(null)
  const OpenAppComponet = ConvertToComponent(OpenApp)
  const [MenuShow, setMenuShow] = useState<boolean | null>(false)

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <>
        <div className='MainWindow'>
          <BarBox setMenuShow={setMenuShow} />
          <div style={{ display: "flex ", width: "100%", flexDirection: "column" }}>
            <TopBox />
            <TerminalSimulator/>
            <AppWindow MenuShow={MenuShow} WindowState={Window} setWindow={setWindow} OpenApp={OpenAppComponet} />
            <GlassCard links={[
              { link: "/icons/folderWhite.svg", bg: "#c01d1c", hovertext: "File Manager", id: "Filemanager", setOpenApp, setWindow, Window },
              { link: "icons/terminal.svg", bg: "black", hovertext: "Terminal", id: "termial" },
              { link: "icons/notes.png", bg: "#eed509b8", hovertext: "Notes", id: "notes" },
              { link: "/icons/CodedMind2.png", bg: "black", hovertext: "About me", id: "about-me" },
              { link: "/icons/photos.png", bg: "white", hovertext: "Photos", id: "photos" },
              { link: "/icons/settings.png", bg: "#3d403f", hovertext: "Settings", id: "settings" },
              { link: "/icons/github.png", bg: "black", hovertext: "Github", id: "github" }]} />
          </div>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
