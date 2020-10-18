import React from 'react'
import "./css/App1.css"
import Heading from "./components/Heading"
import Square1 from "./components/square1"
import Square2 from "./components/square2"
import Square3 from "./components/square3"
import Square4 from "./components/square4"
import Square5 from "./components/square5"
import Square6 from "./components/square6"
import Square7 from "./components/square7"
import Square8 from "./components/square8"

export default function App1() {
    return (
        <div className="main-div">
            <Heading />            
            <div className="paper">
            <Square1 />            
            <Square2 />            
            <Square3 />            
            <Square4 />            
            <Square5 />            
            <Square6 />            
            <Square7 />            
            <Square8 />            
            </div>
            <div className="contacts">
                <img src={require("./images/icons/fb.png")} onClick={()=>{window.open("https://www.facebook.com/asadali.asad.355")}} alt="fb" />
                <img src={require("./images/icons/github.png")} onClick={()=>{window.open("https://github.com/asadalibest1")}} alt="github" />
                <img src={require("./images/icons/linkedin.png")} onClick={()=>{window.open("https://www.linkedin.com/in/asad-ali-14bab11b2/")}} alt="linkedin" />
            </div>
        </div>
    )
}
