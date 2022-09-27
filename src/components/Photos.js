import React from "react"
import ReactDom from "react-dom"
import logo from "../images/pic.jpg"

export default function Photos() {
    return (
        <div>
            <img src={logo} className="photo--img"></img>
        </div>

    )
}