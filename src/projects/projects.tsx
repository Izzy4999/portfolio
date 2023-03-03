import React from "react";
import Navigation from "../components/navBar";
import laptop from "../img/laptop-mac-outline.svg";
import { projectData } from "./projectData";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="container">
      <Navigation />
      <div className="d-flex f-40 ms-1 mt-4 align-items-center">
        <img
          src={laptop}
          style={{
            height: "70px",
            borderRadius: "50%",
          }}
          className="p-3 shadow"
          alt="case"
        />
        <p className="mt-2 ms-2 heading text-info">Projects</p>
      </div>
      <div className="row m-2">
        {projectData.map((project, index) => (
          <div className="col-md-6">
            <div
              className="card border-light shadow-lg m-4 p-4 hover"
              style={{ width: "18rem;" }}
            >
              <div className="card-body m-2">
                <h5
                  className="card-title mb-2"
                  style={{ textTransform: "uppercase" }}
                >
                  {project.title}
                </h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.githubLink}
                  className="btn btn-dark btn-lg m-2"
                >
                  <i className="bi bi-github"></i>
                </a>
                {project.liveSite.length > 1 && (
                  <a href={project.liveSite} target="blank" className="btn bg-skygreen btn-lg m-2">
                    Demo <i className="bi bi-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
