import React from "react";
import LandingPage from "./LandingPage";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';
import './LandingPage.css';
import './Main.css';
import './Footer.css';

function App(){
    return(
        <div className="App">
            <LandingPage/>
            <Main />
            <Footer />
        </div>
    )
}
export default App