import React,{useContext} from "react";
import ColorContext from "../Context/ColorContext";


const Hello=()=>{
    let{style,blackMode,blueMode,whiteMode}=useContext(ColorContext);
    return (
        <div>
            <div style={{ color:style.color,
            backgroundColor:style.backgroundColor,
            border:style.border,}}>
           

            <h1>Hi ! what are you doing </h1>
            <p>just coding</p>
        </div>
        <button onClick={whiteMode}>whiteMode</button>
        <button onClick={blackMode}>darkMode</button>
        <button onClick={blueMode}>BlueMode</button>

        </div>

    )
}
export default Hello;