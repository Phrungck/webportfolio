import React from "react"
import ReactDom from "react-dom"
import Photos from "./components/Photos"
import Name from "./components/Name"
import About from "./components/About"
import Header from "./components/Header"
import Video from "./components/Video"

export default function App() {
    return (
        <div>
            <Header />
            <Video/>
            <div className="nav--desc">
                <Name />
                <Photos />
            </div>
            <main>
                <About />
            </main>
        </div>
    )
}

ReactDom.render(
    <App />,
    document.getElementById("root")
)