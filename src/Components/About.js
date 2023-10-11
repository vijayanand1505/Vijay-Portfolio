import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Vijay Anand</b>, I am from Coimbatore, India. I'm
            a <b>MERN stack web developer</b> and my educational qualification
            is <b>BE in CSE</b>. <br />
            <br />I have a work experience of <b>2 years</b> as a{" "}
            <b>software developer</b> at Segolsys which is a startup and also
            worked as a <b>Full Stack Developer</b>. I love to create projects
            with beautiful designs, you can check out some of my work in the
            projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to play Football, I'm a Divisional level
            player and also I do Short Videography, you can check out some of my
            shots here{" "}
            <a
              href="https://instagram.com/_music.that.heals_?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram.
            </a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Python" />
        <Skills skill="Figma" />
        <Skills skill="C#" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
