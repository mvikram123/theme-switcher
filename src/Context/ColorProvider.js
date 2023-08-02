import React ,{useState} from "react";
import ColorContext from "./ColorContext";

const ColorProvider=(props)=>{

    let[style,setStyle]=useState({
        color:"black",
        backgroundColor:"white",
        border:"1px solid red",

    })
    return (
        <ColorContext.Provider value={{
            style:style,
            blackMode:()=>setStyle({...style,
                color:"white",
                backgroundColor:"black",
                border:"1px solid black",
            }),
            blueMode :()=>setStyle({
                ...style,
                color:"red",
                backgroundColor:"blue",
                border:"1px solid green"

            }),
            whiteMode :()=>setStyle({
                ...style,
                color:"red",
                backgroundColor:"white",
                border:"1px solid green"
            })

        }}>
            {props.children}
        </ColorContext.Provider>
    )
}
export default ColorProvider;
