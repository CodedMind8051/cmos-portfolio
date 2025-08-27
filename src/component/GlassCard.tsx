// import React from 'react'
import "../component/css/GlassCard.css"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function GlassCard(props: any) {
    return (
        <>

            <div id="glass-box" className="glass-box">
                {props.links.map((links: any, index: number) => (
                    <Tooltip key={index} >
                        <TooltipTrigger> <a key={index} href={links.link} className="glass-link">
                            <img  style={{ backgroundColor: `${links.bg}`, padding: "10%", borderRadius: "10px", width: "110%", height: "1.9rem", display: "flex", alignItems: "center", justifyContent: "center" }} src={links.link} alt={`icon-${index}`} className="glass-icon" />
                        </a></TooltipTrigger>
                        <TooltipContent>
                            <p>{links.hovertext}</p>
                        </TooltipContent>
                    </Tooltip>

                ))}

            </div >

        </>
    )
}

export default GlassCard