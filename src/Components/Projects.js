import React from "react";
import ProjectBox from "./ProjectBox";
import HotstarImg from "../images/HotstarImg.png";
import PhotoLab from "../images/PhotoLab.png";
import WeatherApp from "../images/WeatherApp.png";
import InsectGame from "../images/InsectGame.png";
import Menu from "../images/Menu.png";
import Portfolio from "../images/Portfolio.png";
import Calender from "../images/calender.png";
import Expense from "../images/Expense.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={HotstarImg} projectName="Hotstarclone" />
        <ProjectBox projectPhoto={PhotoLab} projectName="PhotoLab" />
        <ProjectBox projectPhoto={WeatherApp} projectName="WeatherApp" />
        <ProjectBox projectPhoto={InsectGame} projectName="InsectGame" />
        <ProjectBox projectPhoto={Menu} projectName="Menus" />
        <ProjectBox projectPhoto={Portfolio} projectName="Portfolio" />
        <ProjectBox projectPhoto={Calender} projectName="Calender" />
        <ProjectBox projectPhoto={Expense} projectName="Expense" />
      </div>
    </div>
  );
};

export default Projects;
