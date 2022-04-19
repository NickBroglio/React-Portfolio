import React from "react";
import '../resume.css';

function Resume() {
    return (
        <div >
            <p className="click-here">Click <a href="/Nick-Broglio-resume.pdf">Here</a> to download my resume!</p>
            <div class="container entire-resume">
                <div class="row justify-content-start ">
                    <div class="col-4 cont">
                        <h3 class="text-wrap text-white fs-1" className="resume-headers">Front-End Proficencies</h3>
                        <div className="list">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 cont back-end">
                        <h3 class="text-wrap text-white fs-1" className="resume-headers">Back-End Proficencies</h3>
                        <div className="list">
                            <ul>
                                <li>APIs</li>
                                <li>Node</li>
                                <li>MERN</li>
                                <li>Express</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume;