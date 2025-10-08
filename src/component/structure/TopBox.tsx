import "../css/TopBox.css"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

function TopBox() {
    return (
        <div className="TopBox">
            <h3 >Coded_Mind__</h3>
            <div className="TopBoxManue" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "90%" }}>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger> <img src="/icons/wifi.svg" color="white" style={{ color: "white" }} alt="" /></MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Wi-Fi:On </MenubarItem>
                             <MenubarSeparator />
                            <MenubarItem>Turn Wi-Fi Off</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Join Other Network...</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Open Network Preferences...</MenubarItem>
                        </MenubarContent>
                        
                    </MenubarMenu>
                      <MenubarMenu>
                        <MenubarTrigger> <img src="/icons/battery.svg" color="white" style={{ color: "white" }} alt="" /></MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                        
                    </MenubarMenu>
                                          <MenubarMenu>
                        <MenubarTrigger> <img src="/icons/suthdown.svg" color="white" style={{ color: "white" }} alt="" /></MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                        
                    </MenubarMenu>
                </Menubar>
            </div>
            {/* <img src="/icons/wifi.svg" color="white" style={{ color: "white" }} alt="" />
                <img src="/icons/battery.svg" className="battery  " color="white" style={{ color: "white" }} alt="" />
                <img src="/icons/suthdown.svg" color="white" style={{ color: "white" }} alt="" /> */}


        </div>
    )
}

export default TopBox