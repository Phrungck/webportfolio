import React, {Component} from "react"
import ReactDOM from "react-dom"
import ReactPlayer from "react-player"
import logo from "../images/echo_try.gif"

class Video extends Component {
    render() {
        return (
            <img className="vid--echo" src={logo}/>
        )
    }
}

export default Video;