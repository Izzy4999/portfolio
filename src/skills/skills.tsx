import React from "react";
import { Icon } from "@iconify/react";
import GreetingLottie from "../components/displayLottie";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { skills } from "./skill";
import { Fade, Slide } from "react-awesome-reveal";
import Navigation from "../components/navBar";

const Skills = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="text-center mt-4">
        <Slide cascade delay={1500} triggerOnce>
          <h2>What I Do</h2>
          <p className="pt-4 mt-2">
            A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
        </Slide>
      </div>
      {skills.map((skill, index) => (
        <div className="row mb-3" key={index}>
          <div className="col-md-6 order-2 order-lg-1 mt-4">
            <Fade direction="left" delay={500} triggerOnce>
              <GreetingLottie animationPath={skill.displaylottie} />
            </Fade>
          </div>
          <div className="col-md-6 mt-4 order-1 order-lg-2">
            <Slide direction="right" delay={500} triggerOnce>
              <h3 className="text-center">{skill.title}</h3>
              <div className="d-flex justify-content-center flex-wrap">
                {skill.softwareSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="icon icon-lg icon-shape shadow-sm m-2 p-3"
                  >
                    <OverlayTrigger
                      key={"bottom"}
                      placement={"bottom"}
                      overlay={
                        <Tooltip id={skill.skillName}>
                          {skill.skillName}
                        </Tooltip>
                      }
                    >
                      <Icon
                        icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></Icon>
                    </OverlayTrigger>
                  </div>
                ))}
              </div>
              <div>
                {skill.skillStyle.map((skill: any, index: any) => (
                  <div key={index} className="f-20 ms-3">
                    {skill}
                  </div>
                ))}
              </div>
            </Slide>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
