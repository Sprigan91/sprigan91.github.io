import React from "react";
import Mars_Rover from "./Mars_Rover.png";
import Mars_Rover_Card from "./Mars_Rover_Card.png";
import Mars_Rover_Interface from "./Mars_Rover_Interface.png"
import Account_Dashboard from "./Account_Dashboard.png"
const projectData = [
    {
        title: "Porject Mini Mars Rover",
        compagny: "Latmos Montigny-les-Bretonneux",
        date: "Janvier 2020 to Aout 2020",
        task: "Participation in a project to create a mini mars rover as a team. My task was to design the electronic motor control card using Altium and to code the card in Python.",
        img: Mars_Rover
    },
    {
        title:"Project Accounts and finance manager",
        compagny: "",
        date:"mai 2023 to present",
        task: "Creation of a web application in react typescript to manage expenses and earnings during the year",
        img: Account_Dashboard
    }
];

const Projects = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} className="">
            <div className="text-2xl underline decoration-sky-500 lg:text-5xl font-bold">
                Project
            </div>
            <div className=" flex-none 2xl:flex  my-10 2xl:ml-10 space-y-14 2xl:space-x-10 ">
                {projectData.map((project, index) => (
                    <div className="shadow-lg" key={index}>
                        <div>
                            <div className="text-2xl font-bold">
                                {project.title} au {project.compagny}
                            </div>
                            <div>{project.task}</div>
                            <div><img src={project.img}/></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Projects;
