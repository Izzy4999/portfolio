import React from "react";
import Navigation from "../components/navBar";
import laptop from "../img/laptop-mac-outline.svg";

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
        <div className="col-md-6">
          <div
            className="card border-light shadow-lg m-4 p-4 hover"
            style={{ width: "18rem;" }}
          >
            <div className="card-body m-2">
              <h5 className="card-title mb-2">title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="www.google" className="btn btn-dark btn-lg me-2">
                <i className="bi bi-github"></i>
              </a>
              <a href="www.google" className="btn bg-skygreen btn-lg">
                Demo <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
