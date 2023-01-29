import React from "react";
import '../styles/ProjectCard.css';
import { ProjectData } from '../utils/ProjectData';

const project = ProjectData;

const styles = {
  card: {
    margin: 20,
  },
  blocks: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  heading: {
    background: 'black',
    minHeight: 50,
    maxWidth: 500,
    lineHeight: 3,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0px 0px 0px 5px',
  },
  content: {
    padding: 0,
    color: 'white',
    background: 'black',
    maxWidth: 550,
  },
  image: {
    maxWidth: 300,
    maxHeight: 300,
    objectFit: 'contain',
    width: "100%",
  },
};

function ProjectCard() {
  const content = ProjectData.map((project) =>
    <div key={project.id} style={styles.card}>
      <img src={project.image} style={styles.image}></img>
      <div style={styles.heading}>
      <h3 style={styles.heading}>{project.title}</h3>
      {/* <p style={styles.content}>{project.about}</p> */}
      </div>
    </div>
  );

  return (
      <div style={styles.blocks}>
        {content}
        </div>
  );
}

export default ProjectCard;