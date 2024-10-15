import React, { useState } from "react";
import './LandingPage.css';

function LandingPage(){

    const [menu, setMenu] = useState(false)

    const toggleMenu = ()=>{
        setMenu(!menu)
    }

    return(
        <div className="landing">
            <header className="header">
            <div className="logo"><h5>Luxe Realty</h5></div> 
            <div className="mobile">0772705992</div>
            <button className="menu-btn" onClick={toggleMenu}>Menu</button>
            {
                menu && (
                    <ul className="list">
                        <li className="menu-item"><a href="#Home">Home</a></li>
                        <li className="menu-item"><a href="About">About</a></li>
                        <li className="menu-item"><a href="Services">Services</a></li>
                        <li className="menu-item"><a href="Contact">Contactn Us</a></li>
                    </ul>
                )
            }
            </header>
        </div>
    )
}
export default LandingPage