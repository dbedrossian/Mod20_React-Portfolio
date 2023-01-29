import React from "react";
import '../styles/Landing.css';
const styles = {
    text: {
      fontSize: '300px',
      color: 'white',
      margin: 100,
      textAlign: 'right'
    },
  };
const Landing = () => (
    <div className="landing">
        <div className="landingItems">
            <h2 style={styles.text}>Hi, I'm Danny.</h2>
        </div>
    </div>
);

export default Landing;