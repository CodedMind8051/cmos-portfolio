import "../css/BarBox.css"
import { useState } from 'react';
import MenuBox from '../MenuBox';







function BarBox() {
  const [clicked, setClicked] = useState(false);
  const [ShowMenus, setShowMenus] = useState(false);
  const icons = [
    { src: '/icons/CodedMind2.png', alt: 'Icon 1' }
  ];

  // useEffect(() => {
  //  onMenuToggle(ShowMenus);
  // }, [ShowMenus])


  return (
    <>

      <div className="barbox">
     
        <div className="TaskBar">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              style={{ color: "white", marginTop: "90%" }}
              onClick={() => {
                setClicked(click => !click)
                setShowMenus(click => !click)
              }}
              className={clicked ? 'clicked' : ""}
            />
          ))}
        </div>
            <MenuBox visible={ShowMenus} />
      </div>
    </>
  )
}

export default BarBox