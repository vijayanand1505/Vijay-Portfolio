import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    HotstarcloneDesc:
      "This a hotstar clone, the SignUp was created by Firebase Authentication, and only the admin has the username and password to edit or delete the movies.It is a full responsive web interface.",
    HotstarcloneGithub: "https://github.com/vijayanand1505/Hotstar-Clone",
    HotstarcloneWebsite: "https://vijay-hotstar-clone.netlify.app/",

    PhotoLabDesc:
      "By using the api key from unsplash and pexels this webite loads the images and the images can be easily downloaded by clicking the download button.",
    PhotoLabGithub: "https://github.com/vijayanand1505/Photo-Lab",
    PhotoLabWebsite: "https://vijay-photo-lab.netlify.app/",

    WeatherAppDesc:
      "A Static site in which the weather of the city can be shown by using the openweathermap api.",
    WeatherAppGithub: "https://github.com/vijayanand1505/Weather-App",
    WeatherAppWebsite: "https://vijay-weatherapp.netlify.app/",

    InsectGameDesc:
      "By choosing the image of the insect the game can be played.It is a normal javascript and a full responsive game",
    InsectGameGithub: "https://github.com/vijayanand1505/Catch-the-Insect",
    InsectGameWebsite: "https://vijay-insect-game.netlify.app/",

    MenusDesc:
      "A Static site in which the Menus of the Restaurant can be shown by using the static datas, and it is a full responsive site.",
    MenusGithub: "https://github.com/vijayanand1505/Restaurant-Menu",
    MenusWebsite: "https://vijay-menus.netlify.app/",

    PortfolioDesc:
      "It contains the Basic details of a Developer, what are all the projects done, experience and also the contact details.",
    PortfolioGithub: "https://github.com/vijayanand1505/vijay-portfolio",
    PortfolioWebsite: "https://vijayanandthangavel.netlify.app/",

    CalenderDesc:
      "The Year 2023 is shown and also there are 5 different moods which can be selected for particular day, along with this there is a shuffle and reset button.",
    CalenderGithub: "https://github.com/vijayanand1505/calender",
    CalenderWebsite: "https://vijay-calender.netlify.app/",

    ExpenseDesc:
      "The Expense Details can be added based upon name, amount, date and it can be filtered by year wise.",
    ExpenseGithub: "https://github.com/vijayanand1505/Expense-App",
    ExpenseWebsite: "https://vijay-expense.netlify.app/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
