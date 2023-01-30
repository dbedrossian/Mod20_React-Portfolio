import React from "react";
import '../styles/ProjectCard.css';
import { ProjectData } from '../utils/ProjectData';

const styles = {
  card: {
    margin: 20,
    textAlign: 'center'
  },
  blocks: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  // heading: {
  //   background: 'black',
  //   minHeight: 50,
  //   maxWidth: 500,
  //   lineHeight: 3,
  //   fontSize: '1.2rem',
  //   color: 'white',
  //   padding: '0px 0px 0px 5px',
  //   textAlign: 'right'
  // },
  content: {
    padding: 5,
    color: 'white',
    background: 'black',
    maxWidth: 500,
    textAlign: 'Center',
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
    <div key={project.id}>
      <img src={project.image} style={styles.image}></img>

      <h3 className="title">{project.title}</h3>
    
      <a style={styles.content} href={project.github}>Github</a>
      <a style={styles.content} href={project.site}>Site</a>
      
      
    </div>
  );

  return (
      <div style={styles.blocks}>
        {content}
        </div>
  );
}

export default ProjectCard;