import React from 'react';
import img1 from ''
 const section=()=>{
     return(
         <div>
          <div id="showcase">
            <img src="./img/glass.jpg" height='800'/>
            <div className="container">
                <h1>Aananya constuctions</h1>
                <h7>
                    Dream your own home and make it real with the helpof our company</h7>
                </div>

        </div>
        <div id="newsletter">
            <div className="container">
                <h1>Subscribe to our site</h1>
                <div>
                    <input type="email"placeholder="Enter Email...."/>
                    <button type="submit" className="button_1">Subscribe</button>
                </div>
            </div>
        </div>
        <div id="boxes">
            <div className="container">
                <div className="box">
                    <img src="./img/house_dup.png" height="150"/>
                    <h3>Duplex House</h3>
                    <p>Duplex house with new fetures and new interior design</p>
                </div>
                <div className="box">
                    <img src="./img/apart_hou.png" height="150"/>
                    <h3>House in apartment</h3>
                    <p>house in aparment with new fetures and new interior design </p>
                </div>
                <div className="box">
                    <img src="./img/apart_dup.png" height="150"/>
                        <h3>Duplex in apartment</h3>
                        <p>Duplex house with new fetures with new interior design</p>
                     </div>
            </div>
        </div>
        </div>
        )
    }
    export default section;

        