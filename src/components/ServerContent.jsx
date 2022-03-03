import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { FaCompass, FaMicrophone } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BsHeadphones } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

const Div = styled.div`
  display: flex;
`;
const Nav = styled.div`
  height: 100vh;
  width: fit-content;
  background-color: #202225;
  ul {
    list-style: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    li {
      height: 50px;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #36393f;
      border-radius: 100%;
      transition: 0.3s ease-in;
      svg {
        height: 24px;
        width: 24px;
        color: #3ba55d;
        transition: 0.3s ease-in;
      }
      :hover {
        border-radius: 1rem;
        cursor: pointer;
        transition: 0.3s ease-out;
        background-color: #3ba55d;
        svg {
          color: #fff;
          transition: 0.3s ease-out;
        }
      }
    }
    li:first-child {
      background-color: #5865f2;
      border-radius: 1rem;
    }
    .border {
      align-self: center;
      height: 0.15rem;
      width: 60%;
      border-radius: 0;
      background-color: #2d2f32;
    }
    li:nth-child(3) {
      background-color: #181818;
      transition: all 0.3s ease-in;
      :hover {
        border-radius: 1rem;
        cursor: pointer;
        transition: all 0.3s ease-out;
      }
    }
  }
`;
const Friends = styled.div`
  background-color: #2f3136;
  width: 20%;
  height: 100vh;
  position: relative;
  .searchbar {
    height: 6vh;
    background-color: #2f3136;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0.8rem;
    margin-bottom: 0.5rem;
  }
  .friends {
    display: flex;

    margin: 0 0.6rem;
    align-items: center;

    border-radius: 0.2rem;
    color: #72767d;
    cursor: pointer;
    margin-bottom: 1.5rem;
    h4 {
      font-weight: 100;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
  .message {
    .channel {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #72767d;
      font-size: 0.9rem;
      :hover {
        color: #dfdfdf;
      }
      svg {
        font-size: 1.5rem;
      }
      margin-bottom: 0.5rem;
    }
    .text_channels {
      .channels_list {
        padding: 0.3rem 0.5rem;
        margin: 0 0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;

        color: #fff;
        :hover {
          background-color: #36393f;
          cursor: pointer;
        }
        svg {
          margin-right: 0.5rem;
          color: #72767d;
        }
        h4 {
          font-weight: 100;
        }
      }
    }
    .user_info {
      display: flex;
      justify-content: space-between;
      position: absolute;
      background-color: #282a2c;
      width: 100%;
      padding: 0.5rem;
      box-sizing: border-box;
      bottom: 0;
      left: 0;
      .user {
        display: flex;
        align-items: center;
        h5,
        h6 {
          color: #fff;
          font-weight: 100;
        }
        h6 {
          color: #afb5be;
        }
        .avatar {
          height: 2.2rem;
          width: 2.2rem;
          margin-right: 0.5rem;
          background-color: black;
          /* background-image: url("/Izuku.png"); */
          border-radius: 100%;
          position: relative;
          img {
            position: absolute;
            height: 2.2rem;
            width: 2.2rem;
            border-radius: 100%;
          }
          .online {
            position: absolute;
            height: 0.6rem;
            width: 0.6rem;
            background-color: #3ba55d;
            bottom: 0.1rem;
            right: -0.2rem;
            border-radius: 100%;
            border: 3px solid #282a2c;
          }
        }
      }
      .user_setting {
        display: flex;
        align-items: center;
        svg {
          color: #afb5be;
          margin-left: 1rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
const Chat = styled.div`
  background-color: #36393f;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  .chat {
    display: grid;
    grid-template-columns: 6fr 2fr;
    height: 100%;
    .wumpus {
      background-color: #36393f;
      padding: 1rem;
      .channel_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        div {
          display: flex;
          svg {
            margin-right: 0.5rem;
            font-size: larger;
            color: #73767c;
          }
        }
        ul {
          list-style: none;
          display: flex;
          li {
            margin-left: 1rem;
            svg {
              font-size: larger;
              color: #b9bbbe;
            }
          }
        }
      }
    }
    .active_now {
      padding: 2rem 0.8rem;
      background-color: #2f3136;
      border-left: 1.5px solid #45464b;
      color: #73767c;
      h3 {
        margin-bottom: 1rem;
      }
      ul {
        list-style: none;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 0.6rem;
          :nth-child(2) {
            img {
              background-color: #42b581;
            }
          }
          :nth-child(3) {
            img {
              background-color: #faa626;
            }
          }
        }
        img {
          background-color: #f04747;
          border-radius: 100%;
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
`;
// let img = new Image();
// let list = document.createElement("li");
// img.src = `/assets/discord_logo.svg`;
// function image() {
//   for (let i = 1; i <= 10; i++) {
//     // console.log(list.appendChild(img));
//     console.log(document.getElementById("myList").appendChild(list));
//   }
// }
// image();

const ServerContent = () => {
  return (
    <Div>
      <Nav>
        <ul>
          <li>
            <a href="/login/dashboard">
              <img
                src="/assets/discord_logo.svg"
                alt="Discord_Logo"
                width="50px"
                height="50px"
              />
            </a>
          </li>
          <li className="border"></li>
          <li>
            <a href={"/login/dashboard/server/" + "codedamn"}>
              <img
                src="/assets/CodeDamn.png"
                alt="CodeDamn_Logo"
                width="23px"
                height="35px"
              />
            </a>
          </li>
          <li>
            <AiOutlinePlus />
          </li>
          <li>
            <FaCompass />
          </li>
          <li className="border"></li>
          <li>
            <FiDownload />
          </li>
        </ul>
      </Nav>
      <Friends>
        <div className="searchbar">
          <div>Codedamn</div>
          <AiOutlineClose />
        </div>
        <div className="friends">
          <FaHashtag />
          <h4>rules</h4>
        </div>
        <div className="message">
          <div className="channel">
            <RiArrowDropDownLine />
            <p>TEXT CHANNELS</p>
          </div>
          <div className="text_channels">
            <div className="channels_list">
              <FaHashtag />
              <h4>algorithmes</h4>
            </div>
            <div className="channels_list">
              <FaHashtag />
              <h4>announcment</h4>
            </div>
            <div className="channels_list">
              <FaHashtag />
              <h4>blogging</h4>
            </div>
            <div className="channels_list">
              <FaHashtag />
              <h4>collaborators</h4>
            </div>
            <div className="channels_list">
              <FaHashtag />
              <h4>course-ideas</h4>
            </div>
          </div>
          <div className="user_info">
            <div className="user">
              <div className="avatar">
                <img src="/Izuku.png" alt="UserImage" />
                <div className="online"></div>
              </div>
              <div className="user_id">
                <h5>DevNick</h5>
                <h6>#5629</h6>
              </div>
            </div>
            <div className="user_setting">
              <FaMicrophone />
              <BsHeadphones />
              <IoSettingsSharp />
            </div>
          </div>
        </div>
      </Friends>
      <Chat>
        <div className="chat">
          <div className="wumpus">
            <div className="channel_info">
              <div>
                <FaHashtag />
                <h3>Codedamn</h3>
              </div>
              <ul>
                <li>
                  <BsBellFill />
                </li>
                <li>
                  <BsPinAngleFill />
                </li>
                <li>
                  <FaUserFriends />
                </li>
              </ul>
            </div>
          </div>
          <div className="active_now">
            <h3>Online--3</h3>
            <ul id="myList">
              <li>
                <img src="/assets/discord_logo.svg" alt="Discord_Logo" />
                <h4>Milad</h4>
              </li>
              <li>
                <img src="/assets/discord_logo.svg" alt="Discord_Logo" />
                <h4>Batman</h4>
              </li>
              <li>
                <img src="/assets/discord_logo.svg" alt="Discord_Logo" />
                <h4>Unknown</h4>
              </li>
            </ul>
          </div>
        </div>
      </Chat>
    </Div>
  );
};

export default ServerContent;
