import React from "react"
import ReactDOM from "react-dom"

export default function About() {
    return (
        <div className="about--">
            <h1 className="about--h1">Career Objective</h1>
            <p1 className="about--obj--det">Pursue a career in computer science and data science, 
                specifically in the application of{' '}
                <span className="purple--high">computer vision</span> and{' '}
                <span className="purple--high">deep learning </span> in{' '}
                <span className="purple--high">healthcare</span>{' '}, and{' '}
                <span className="purple--high">consumer behavior</span>{''}.
            </p1>
            <h1 className="about--h1">Bio</h1>
            <table className="bio--table">
                <tr>
                    <td className="bio--date">1995</td>
                    <td className="bio--info">Born in Mandaue City, Cebu.</td>
                </tr>
                <tr>
                    <td className="bio--date">2012</td>
                    <td className="bio--info">Completed high school from Laguna Science High School. {/*Graduated batch valedictorian.*/}</td>
                </tr>
                <tr>
                    <td className="bio--date">2016</td>
                    <td className="bio--info">Completed Bachelor's degree in Management Engineering from Ateneo de Manila University. </td>
                </tr>
                {/* <tr>
                    <td className="bio--date">2017</td>
                    <td className="bio--info">Worked at San Miguel Corporation as Procurement Auditor.</td>
                </tr>
                <tr>
                    <td className="bio--date">2018</td>
                    <td className="bio--info">Worked at Monde Nissin as Materials Buyer.</td>
                </tr> */}
                <tr>
                    <td className="bio--date">2019</td>
                    <td className="bio--info">Worked at Ateneo Policy Center as Research Associate.</td>
                </tr>
                <tr>
                    <td className="bio--date">2020--</td>
                    <td className="bio--info">On-going Master's Degree in Computer Science specializing in computer vision and deep learning research.</td>
                </tr>
                <tr>
                    <td className="bio--date">2022--</td>
                    <td className="bio--info">Working at University of the Philippines Diliman as Research Specialist I.</td>
                </tr>
            </table>
            <h1 className="about--h1">Graduate Research</h1>
        </div>
    )
}