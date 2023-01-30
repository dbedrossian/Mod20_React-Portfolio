import React from "react";
import '../styles/Navbar.css';
import NavTabs from "./NavTabs";

const styles = {
    navbarNameStyle: {
        justifyContent: 'left',
    },
    navbarStyle: {
        justifyContent: 'right',
        display: 'flex',
        color: 'white',
        padding: '15px'
    }
}

function Navbar() {
    return (
        <nav className="navbar">
            <div style={styles.navbarNameStyle}>
            <a href="/">Danny Bedrossian</a>
            </div>
            {/* <div style={styles.navbarStyle}>
                <h5 className="headerText">About</h5>
                <h5 className="headerText">Portfolio</h5>
                <h5 className="headerText">Contact</h5>
                <h5 className="headerText">Resume</h5>
            </div> */}
        </nav>
        
    )
};

export default Navbar;