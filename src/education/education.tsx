import { Icon } from "@iconify/react";
import React from "react";
import Navigation from "../components/navBar";
import { education } from "./education-data";

const Education = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="d-flex f-40 ms-1 mt-4 align-items-center">
        <Icon
          style={{
            borderRadius: "50%",
            fontSize: "72px",
          }}
          className="p-3 shadow"
          icon={"openmoji:books"}
          data-inline="false"
        ></Icon>
        <p className="mt-2 ms-2 heading text-info">Education</p>
      </div>
      <div className="row m-2">
        {education.map((edu, index) => (
          <div className="col-md-6" key={index}>
            <div
              className="card border-light shadow-lg m-2 hover"
              style={{ width: "18rem;" }}
            >
              <div className="card-body m-2">
                <h5 className="card-title light_blue">{edu.school}</h5>
                <h6 className="m-2 text-muted">{edu.certificate}</h6>
                <span className="m-2 badge bg-info">{edu.duration} </span>
                <ul>
                  {edu.postHeld &&
                    edu.postHeld.map((post, index) => (
                      <li className="" key={index}>
                        {post}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
