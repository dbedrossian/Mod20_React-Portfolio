import React from "react";

const styles = {
    button: {
      padding: 150,
      color: 'white',
      borderColor: 'white',
      fontSize: 25,
    },
    header: {
        color: 'white'
    }
};

const Resume = () => (
    <div>
        <div style={styles.button}>
        <h1 style={styles.header}>Download Resume</h1>
        <button type="button" style={styles.button} onclick="alert('Downloading Resume')">~ Download ~</button>
        </div>
    </div>
);

export default Resume;