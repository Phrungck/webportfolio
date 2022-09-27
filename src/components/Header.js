import React from "react"
import ReactDOM from "react-dom"

export default function Header() {
    return (
        <nav>
            <button className="nav--home" onClick={()=> 
                window.location = 'http://localhost:3000/'}>Phrungck</button>
            <button className="nav--home" onClick={()=> 
                window.location = 'http://localhost:3000/'}>Works</button>
            <button className="nav--home" onClick={()=> 
                window.location = 'http://localhost:3000/'}>Techs</button>
            <button className="nav--home" onClick={()=> 
                window.location = 'http://localhost:3000/'}>Source</button>
        </nav>
    )
}