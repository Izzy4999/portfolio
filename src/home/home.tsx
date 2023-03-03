import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import coding from "../lottie/developer.json";
import GreetingLottie from "../components/displayLottie";
import Navigation from "../components/navBar";
import { Fade } from "react-awesome-reveal";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="container">
      <Navigation />
      <div className="row mt-4 m-4 ">
        <div className="col-md-6 pt-4" style={{ backgroundColor: "white" }}>
          <div className="row align-items-center">
            <div className="col-md-12">
              <Fade direction="left" cascade damping={0.3}>
                <h3 className="pb-3 f-40">Hi, I'm Favour Israel</h3>

                <p className="f-20 mt-2">
                  I'm passionate Full Stack web developer having an experience
                  of web applications. <br />- 🔭 I’m currently working on
                  **Messaging app** <br />- 🌱 I’m currently learning
                  **Solidity, ethersJs, Hardhat, Flutter** <br /> - 📫 How to
                  reach me **princeisrael409@gmail.com**
                </p>
                <div className="ms-4">
                  <div className="d-flex align-items-center pt-4">
                    <a
                      href="https://www.facebook.com/favourisrael.taiwo"
                      target="blank"
                      className="me-4"
                    >
                      <IoLogoFacebook
                        style={{ color: "teal", fontSize: "30px" }}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/taiwofavourisrael/?igshid=YzgyMTM2MGM%3D"
                      target="blank"
                      className="me-4"
                    >
                      <IoLogoInstagram
                        style={{ color: "teal", fontSize: "30px" }}
                      />
                    </a>
                    <a
                      href="https://github.com/Izzy4999"
                      target="blank"
                      className="me-4"
                    >
                      <IoLogoGithub
                        style={{ color: "teal", fontSize: "30px" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/favour-taiwo-8b9b5a200"
                      target="blank"
                      className="me-4"
                    >
                      <IoLogoLinkedin
                        style={{ color: "teal", fontSize: "30px" }}
                      />
                    </a>
                    <a
                      href="https://twitter.com/GiyuRengoku?s=09"
                      target="blank"
                      className="me-4"
                    >
                      <IoLogoTwitter
                        style={{ color: "teal", fontSize: "30px" }}
                      />
                    </a>
                  </div>
                  <button className="btn btn-primary mt-4">
                    <MdOutlineInsertDriveFile style={{ color: "white" }} />
                    Resume
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <GreetingLottie animationPath={coding} />
        </div>
      </div>
    </div>
  );
};

export default Home;
