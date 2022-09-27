import React from "react"
import ReactDOM from "react-dom"
import logo from "../images/GitHub-Mark.png"

export default function Buttons() {
    return (
        <div className="button--">
            <button className="button--email" onClick={()=> 
                window.location = 'mailto:fatabuco@up.edu.ph'}>✉ Email</button>
            <button className="button--git" onClick={()=> 
                window.open('https://github.com/Phrungck/Thesis')}><img src={logo} width="15px"/> GitHub</button>
        </div>
    )
}
