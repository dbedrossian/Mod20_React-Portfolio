import React from "react";
import '../styles/ProjectCard.css';
import { ProjectData } from '../utils/ProjectData';

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
    fontSize: '1.5rem',
    color: 'white',
    padding: '0px 0px 0px 0px',
    textAlign: 'center'
  },
  content: {
    padding: 20,
    color: 'white',
    background: 'gray',
    fontSize: '1.3rem'
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
     
      <div style={styles.heading}>
      <h3 style={styles.heading}>{project.title}</h3>
      <a style={styles.content} href={project.github}>Github</a>
      <a style={styles.content} href={project.site}>Site</a>
      </div>
      <img src={project.image} style={styles.image}></img>
    </div>
  );

  return (
      <div style={styles.blocks}>
        {content}
        </div>
  );
}

export default ProjectCard;