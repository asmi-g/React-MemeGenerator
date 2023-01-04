import React from "react"
import trollface from "./images/trollface.png"

function Header(){
    return(
        <div className="header">
            <div className="header--logo">
                <img className="header--pic" src={trollface}/>
                <h1>Meme Generator</h1>
            </div>
            <h3 className="header--text">React Course - Project 3</h3>
        </div>
    )
}

export default Header