import React from "react";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import { Nav } from "./Nav";

const Main = styled.div`
  position: relative;
  background-color: #404eed;
  overflow: hidden;
  text-align: center;
  .background-img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }
  .left-svg {
    position: absolute;
    height: 22rem;
    bottom: 0;
    right: 50%;
    transform: translateX(-51%);
  }
  .right-svg {
    position: absolute;
    height: 22rem;
    bottom: 0;
    left: 50%;
    transform: translateX(58%);
  }
`;
const HeroSection = styled.div`
  padding: 6rem 0;

  p {
    font-size: 1.25rem;
    color: #fff;
    margin-top: 2.5rem;
    line-height: 1.625;
    font-family: Whitney-light;
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    button {
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.25rem;
      margin: 0 0.8rem;
      padding: 1rem 2rem;
      a {
        margin-left: 0.5rem;
      }
      :last-child {
        background-color: #23272a;
        color: #fff;
        a {
          margin: 0;
        }
        :hover {
          background-color: #36393f;
          transition: 0.3s ease-in-out;
        }
      }
      :hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: box-shadow 0.3s ease-in-out;
      }
    }
  }
`;
const H1 = styled.h1`
  font-size: 56px;
  font-family: "Russo One", sans-serif;
  color: #fff;
`;
const Section1_3 = styled.div`
  padding: 6rem 0;
  background-color: #fff;
  h1 {
    font-size: 3rem;
    padding: 2rem 0;
    padding-left: 5rem;
    text-align: start;
    line-height: 120%;
  }
  p {
    padding-left: 5rem;
    text-align: start;
    font-size: 1.25rem;
    line-height: 1.625;
    font-family: Whitney-light;
  }
`;
const Section2 = styled.div`
  padding: 6rem 0;
  background-color: #f6f6f6;
  h1 {
    font-size: 3rem;
    padding: 5rem 0 2rem 0;
    text-align: start;
    line-height: 120%;
  }
  p {
    text-align: start;
    font-size: 1.25rem;
    line-height: 1.625;
    font-family: Whitney-light;
  }
  svg {
    padding-left: 5rem;
  }
`;

const Section4 = styled.div`
  padding: 6rem 0;
  background-color: #f6f6f6;
  h2 {
    font-family: "Russo One", sans-serif;
    font-size: 3rem;
    text-align: center;
    padding-bottom: 2rem;
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.625;
    padding-bottom: 2rem;
    font-family: Whitney-light;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin-bottom: -1rem;
    }
    h4 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      font-family: "Russo One", sans-serif;
    }
    button {
      background-color: #5860d8;
      color: #fff;
      justify-content: center;
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      margin: 0;
      padding: 1rem 2rem;
      :hover {
        background-color: #6c74db;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: 0.6s ease-in;
      }
      a {
        margin-left: 0.5rem;
      }
    }
  }
`;

const Hero = () => {
  return (
    <>
      <Main>
        <img
          className="background-img"
          src="./assets/center_bg_landing_header.svg"
          alt="Center-SVG"
        />
        <img
          className="left-svg"
          src="./assets/left_bg_landing_header.svg"
          alt="Left-SVG"
        />
        <img
          className="right-svg"
          src="./assets/right_bg_landing_header.svg"
          alt="Right-SVG"
        />
        <HeroSection className="layout">
          <H1>IMAGINE A PLACE...</H1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community.
            <br /> Where just you and a handful of friends can spend time
            together. A place that makes it easy
            <br /> to talk every day and hang out more often.
          </p>
          <div className="buttons">
            <button>
              <FiDownload />
              <a href="/">Download for Windows</a>
            </button>
            <button>
              <a href="/">Open Discord in your browser</a>{" "}
            </button>
          </div>
        </HeroSection>
      </Main>
      <Section1_3 className="layout">
        <div className="row">
          <img
            className="col-7"
            src="./assets/study_group.svg"
            alt="Study-Group"
            height="440px"
          />
          <div className="col-5">
            <h1>Create an invite-only place where you belong</h1>
            <p>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </Section1_3>
      <Section2>
        <div className="layout">
          <div className="row">
            <div className="col-4">
              <h1>Where hanging out is easy</h1>
              <p>
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
            </div>

            <img
              className="col-8"
              src="./assets/chillin.svg"
              alt="Chillin-SVG"
              height="440px"
            />
          </div>
        </div>
      </Section2>
      <Section1_3 className="layout">
        <div className="row">
          <img
            className="col-7"
            src="./assets/coach.svg"
            alt="Coach-Svg"
            height="440px"
          />

          <div className="col-5">
            <h1>From few to a fandom</h1>
            <p>
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </Section1_3>
      <Section4>
        <div className="layout ">
          <div className="col">
            <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
            <p>
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their
              <br /> games, or gather up and have a drawing session with screen
              share.
            </p>
            <img
              src="./assets/just_chillin.svg"
              alt="Just-Chillin"
              height="712px"
            />
            <div className="center">
              <img src="./assets/stars.svg" alt="Stars" />
              <h4>Ready to start your journey?</h4>
              <button>
                <FiDownload />
                <a href="/">Download for Windows</a>
              </button>
            </div>
          </div>
        </div>
      </Section4>
    </>
  );
};

export default Hero;
