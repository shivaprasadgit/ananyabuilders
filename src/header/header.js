import React from 'react'
import './header.css'

const header=()=>{
    return(
        <div className="header">
        <div className="container">
            <div id="branding">
                <h1><span className="highlight">ANANYA</span><em>builders</em></h1>
            </div>
            <nav>
                <ul>
                    <li className="current"><a href="index.html">Home</a></li>
                    <li className="current"><a href="About.html">About</a></li>
                    <li className="current"><a href="services.html">Services</a></li>
                </ul>
            </nav>
        </div>
    </div>
 
)
}
export default header;

