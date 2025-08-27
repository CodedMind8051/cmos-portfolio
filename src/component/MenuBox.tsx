import { useEffect } from "react"
import "../component/css/MenuBox.css"
import {InputWithButton} from "../component/inputWithbtn"

function MenuBox({ visible }: { visible: boolean }) {


  useEffect(() => {
    const glass = document.getElementById("glass-box");
    if (glass) {
      if (visible) {
        glass.classList.add("hide-glass");
      } else {
        glass.classList.remove("hide-glass");
      }
    }
  }, [visible]);
  let links = [{ link: "/icons/folderWhite.svg", bg: "#c01d1c", hovertext: "Projects" },{ link: "/icons/folderWhite.svg", bg: "#c01d1c", hovertext: "Projects" },{ link: "/icons/folderWhite.svg", bg: "#c01d1c", hovertext: "Projects" },{ link: "/icons/folderWhite.svg", bg: "#c01d1c", hovertext: "Projects" }, { link: "/icons/folderWhite.svg", bg: "#c01d1c", hovertext: "Projects" }, { link: "icons/terminal.svg", bg: "black", hovertext: "Terminal" }, { link: "icons/notes.png", bg: "#eed509b8", hovertext: "Notes" }, { link: "/icons/CodedMind2.png", bg: "black", hovertext: "About me" }, { link: "/icons/photos.png", bg: "white", hovertext: "Photos" }, { link: "/icons/settings.png", bg: "#3d403f", hovertext: "Settings" }, { link: "/icons/github.png", bg: "black", hovertext: "Github" }]

  return (
    <div className={`menu-box ${visible ? 'slide-out' : 'slide-in'}`} >
        {/* <InputWithButton/> */}
      <div className="menu-box-appSection">

        {links.map((links: any, index: number) => (
       
          <a key={index} href={links.link} className="glass-link">
            <img
              src={links.link}
              alt={`icon-${index}`}
              className="glass-icon"
              style={{ backgroundColor: links.bg }}
            />
            <div style={{position:"relative" , left:"-20%", color: 'white', marginTop: '4px', fontSize: '12px' }}>{links.hovertext}</div>
          </a>


        ))}


      </div>

    </div>
  )
}

export default MenuBox