import React, { useEffect, useState } from "react";
import axios from "axios";
import "./projects.css";
import img3 from "./assets/weather-web.png";
import img2 from "./assets/password-generator.png";
import img1 from "./assets/decimal-to-binary.png";
import img4 from "./assets/finearts.png";
import img5 from "./assets/order-management.png";
import img6 from "./assets/karnari.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects,setProjects]=useState([]);
  useEffect(()=>{
    const apiKey = process.env.REACT_APP_API;
    const projectsApi=`${apiKey}/projects`;
    // console.log(projectsApi);
    axios.get(projectsApi).then((response)=>{
      console.log(response.data);
      setProjects(response.data);
    }).catch((error)=>{
      console.log(error);
    })
    
  },[]);
  // {curPrintStar(codechefData.rating).map((e, index) => (
  //   <div key={index}>{e}</div>
  // ))}
  let techStack1 = ["HTML", "CSS", "Javascript"];
  let techStack2 = ["HTML", "CSS", "Javascript"];
  let techStack3 = ["ReactJs","Weather API","HTML", "CSS", "Javascript"];
  let techStack4 = ["ReactJs", "MongoDB", "NodeJS", "ExpressJS","REST API","Cloudinary","Vercel"];
  let techStack5 = ["Postman", "MongoDB", "NodeJS", "ExpressJS","REST API"];
  let techStack6 = ["HTML", "CSS", "Javascript", "ReactJs"];
  return (
    <>
      <div>
        <div className="projects-container">
          <div className="projects-heading">
          </div>
          {projects.map((val,key)=>(<ProjectCard
            heading={val.title}
            
            tech={val.techs.map((e, index) => (
              <div
                key={index}
                className="tech-bar"
              >
                {e}
              </div>
            ))}
            imglink={val.imageUrl}
            url={val.websiteLink}
            github={val.githubLink}
            info={val.info}

          />))}
        </div>
      </div>
    </>
  );
}
