import logo from "../briefcase-duotone.svg";
import exp from "../img/dusecaSoftware.jpg";
import React from "react";
import Navigation from "../components/navBar";
import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <div className="container mt-4">
      <Navigation />
      <div className="d-flex justify-content-start align-items-center mb-3">
        <img
          src={logo}
          style={{
            height: "70px",
            borderRadius: "50%",
          }}
          className="p-3 shadow"
          alt="case"
        />
        <p className="ms-2 text-info heading pt-4">Experience</p>
      </div>
      <div className="row">
        {experienceData.map((experience, index) => (
          <div className="col-md-6">
            <div
              className="card border-light shadow-lg"
              style={{ width: "18rem;" }}
            >
              <img
                src={experience.img}
                style={{
                  objectFit: "cover",
                  left: 0,
                  right: 0,
                  top: "7rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "8rem",
                  height: "8rem",
                  borderRadius: "50%",
                }}
                className="card-img-top shadow mt-4"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">{experience.companyName}</h5>
                <h6 className="card-subtitle mb-2 text-center">
                  {experience.role}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted text-center">
                  {experience.duration}
                </h6>
                <p className="card-text">
                 {experience.workDone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
