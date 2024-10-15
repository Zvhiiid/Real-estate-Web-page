import React from "react";
import './Main.css';
import homeImage from '../assets/home-for-sale.jpg'
import { useState } from "react";

function Main(){
    const [add, setAdd] = useState("")
    const handleClick =()=>{
        setAdd("New Listing add")
    }
    return(
        <div className="main">
        <div className="content">
            <h1>Discover the <span>perfect place</span> to live and thriv $ </h1>
            <p>explore a curated section of homes that fit your lifestyle and preferences.</p>
            <button className="view-list" onClick={handleClick}>View Listings </button>
            <p>{add}</p>
            </div>
            <div className="img">
            <img src={homeImage} alt="home" className="home-img"></img>
            </div>
        </div>
    )
}
export default Main