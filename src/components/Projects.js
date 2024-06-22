import React from "react";
import "./projects.css";
import img3 from "./assets/weather-web.png";
import img2 from "./assets/password-generator.png";
import img1 from "./assets/decimal-to-binary.png";
import img4 from "./assets/finearts.png";
import img5 from "./assets/order-management.png";
import img6 from "./assets/karnari.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
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
          <ProjectCard
            heading="The Karnari"
            tech={techStack6.map((e, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ECF5FD",
                  padding: "4px 12px",
                  fontSize:"12px",
                  fontWeight:"600",
                  color:"#175CA3",
                  borderRadius:"20px",
                  border:"1px solid #175CA3"
                }}
              >
                {e}
              </div>
            ))}
            imglink={img6}
            url="https://thekarnari.vercel.app"
            info="Frontend Clone of thekarnani.com"
          />
          <ProjectCard
            heading="Order Management REST API"
            tech={techStack5.map((e, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ECF5FD",
                  padding: "4px 12px",
                  fontSize:"12px",
                  fontWeight:"600",
                  color:"#175CA3",
                  borderRadius:"20px"
                }}
              >
                {e}
              </div>
            ))}
            imglink={img5}
            url="https://documenter.getpostman.com/view/30951275/2s9Yytg1Ps"
            info="The Order Management System (OMS) API streamlines order processes. Users create orders, update collaboratively, and make payments. Security measures are essential, and comprehensive documentation aids integration, empowering businesses for efficient order management."
          />
          <ProjectCard
            heading="Finearts NITH"
            tech={techStack4.map((e, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ECF5FD",
                  padding: "4px 12px",
                  fontSize:"12px",
                  fontWeight:"600",
                  color:"#175CA3",
                  borderRadius:"20px",
                  border:"1px solid #175CA3"
                }}
              >
                {e}
              </div>
            ))}
            imglink={img4}
            url="https://fineartsnith.vercel.app/"
            info="Developed FineArts NITH website with React.js for front-end and Node.js, Express.js, MongoDB for back-end. Integrated Cloudinary for media management, ensuring successful deployment and optimal performance maintenance."
          />
          <ProjectCard
            heading="Weather Website"
            tech={techStack3.map((e, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ECF5FD",
                  padding: "4px 12px",
                  fontSize:"12px",
                  fontWeight:"600",
                  color:"#175CA3",
                  borderRadius:"4px"
                }}
              >
                {e}
              </div>
            ))}
            imglink={img3}
            url="https://07suryansh.github.io/Weather-Web/"
            info="Developed a modern weather website, integrating
                Weather API for real-time data and ensuring a visually appealing
                user experience."
          />

          <ProjectCard
            heading="Password Generator"
            tech={techStack2.map((e, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ECF5FD",
                  padding: "4px 12px",
                  fontSize:"12px",
                  fontWeight:"600",
                  color:"#175CA3",
                  borderRadius:"4px"
                }}
              >
                {e}
              </div>
            ))}
            imglink={img2}
            url="https://07suryansh.github.io/password-generator/"
            info="Designed and implemented user-friendly password generator using
                HTML, CSS, JS ensuring 99 percent strong passwords for client
                security."
          />

          <ProjectCard
            heading="Decimal to Binary"
            tech={techStack1.map((e, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ECF5FD",
                  padding: "4px 12px",
                  fontSize:"12px",
                  fontWeight:"600",
                  color:"#175CA3",
                  borderRadius:"4px"
                }}
              >
                {e}
              </div>
            ))}
            imglink={img1}
            url="https://07suryansh.github.io/DecimalToBinary/"
            info="Developed an intuitive Decimal to Binary and Hexadecimal
                conversion application using HTML, CSS, and JavaScript."
          />
        </div>
      </div>
    </>
  );
}
