import React from "react";
import '../styles/Landing.css';

const styles = {
    image: {
      width: "100%",
    },
};

const About = () => (
    <div>
        <div className="About">
            <img src="./IMG_1812-copy-scaled.JPG" style={styles.image} />
            <div className="aboutText">
                <h3 className="aboutMe">About Me.</h3>
                <h4>Hi, I'm Danny. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id odio id eros hendrerit vehicula nec commodo nunc. Ut tempor elementum tristique. Curabitur cursus justo ut est convallis, lobortis scelerisque risus consequat. Cras fringilla tortor nec nunc tincidunt, vel scelerisque nibh malesuada. Pellentesque mattis porttitor imperdiet. Donec scelerisque neque augue, ut volutpat est rhoncus nec. In at consequat lectus. Aenean ut faucibus urna. In nec erat eu lectus ornare ullamcorper. Maecenas sed orci elit. Curabitur eleifend et eros quis pellentesque. Suspendisse pretium a metus id varius. Curabitur at ullamcorper purus. Nunc tristique nibh leo, pulvinar sollicitudin velit ultrices sed.</h4>
            </div>
        </div>
    </div>
);

export default About;