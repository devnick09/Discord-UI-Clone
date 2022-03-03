import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { FaCompass, FaMicrophone } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BsHeadphones } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

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
  width: fit-content;
  height: 100vh;
  position: relative;
  .searchbar {
    height: 6vh;
    background-color: #2f3136;
    border-bottom: 2px solid #202225;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0;
    margin-bottom: 0.5rem;
    div {
      width: 12.5rem;
      margin: 0 0.8rem;
      background-color: #202225;
      color: #72767d;
      font-size: 0.9rem;
      outline: none;
      border: none;
      border-radius: 0.2rem;
      padding: 0.4rem 0.5rem;
      cursor: pointer;
    }
  }
  .friends {
    display: flex;
    background-color: #393c43;
    margin: 0 0.6rem;
    align-items: center;
    padding: 0.5rem 0.8rem;
    border-radius: 0.2rem;
    cursor: pointer;
    margin-bottom: 1.5rem;
    h4 {
      color: #fff;
      font-weight: 100;
    }
    svg {
      margin-right: 1rem;
    }
  }
  .message {
    margin: 0 1.2rem;
    .dm {
      display: flex;
      justify-content: space-between;
      color: #72767d;
      font-size: 0.9rem;
      :hover {
        color: #dfdfdf;
      }
      svg {
        color: #fff;
      }
      margin-bottom: 1.5rem;
    }
    .friend_list {
      display: flex;
      align-items: center;
      svg {
        fill: #36393f;
      }
    }
    .user_info {
      display: flex;
      justify-content: space-between;
      position: absolute;
      background-color: #282a2c;
      width: 14.1rem;
      padding: 0.5rem;
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
          height: 2rem;
          width: 2rem;
          margin-right: 0.5rem;
          background-image: url("/1f603.svg");
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
            bottom: -0.2rem;
            right: -0.3rem;
            border-radius: 100%;
            border: 3px solid #282a2c;
          }
        }
      }
      .user_setting {
        display: flex;
        align-items: center;
        padding-right: 0.5rem;
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

  .navbar {
    height: 6vh;
    background-color: #36393f;
    border-bottom: 2px solid #2f3136;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      li {
        margin-right: 1rem;
      }
      li:nth-child(2) {
        background-color: #45464b;
        width: 0.1rem;
        height: 1.5rem;
      }
      .status {
        color: #afb5be;
        padding: 0.2rem 0.5rem;
        border-radius: 0.2rem;
        cursor: pointer;
        :hover {
          background-color: #3a3e44;
        }
      }
      li:nth-child(3) {
        color: #fff;
        background-color: #42474d;
      }
      li:nth-child(7) {
        color: #fff;
        background-color: #3ba55d;
        :hover {
          background-color: #3ba55d;
        }
      }
    }
    .friends {
      display: flex;
      align-items: center;
      border-radius: 0.2rem;
      cursor: pointer;
      h4 {
        color: #fff;
        font-weight: 100;
      }
      svg {
        margin-right: 0.6rem;
      }
    }
  }
  .chat {
    display: grid;
    grid-template-columns: 7fr 3fr;
    height: 94vh;
    .wumpus {
      background-color: #36393f;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        margin-bottom: 3rem;
      }
      p {
        color: #72767d;
        font-weight: thin;
      }
    }
    .active_now {
      padding: 2rem 0.8rem;
      background-color: #36393f;
      border-left: 1.5px solid #45464b;
      h3 {
        color: #fff;
        font-weight: bold;
        margin-bottom: 2rem;
      }
      div {
        text-align: center;
        h4 {
          color: #fff;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        h5 {
          color: #afb5be;
          font-weight: 100;
        }
      }
    }
  }
`;

const Dashboard = () => {
  return (
    <Div>
      <Nav>
        <ul>
          <li>
            <img
              src="/assets/discord_logo.svg"
              alt="Discord_Logo"
              width="50px"
              height="50px"
            />
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
          <div>Find or start a conversation</div>
        </div>
        <div className="friends">
          <svg
            class="linkButtonIcon-7rsZcu"
            aria-hidden="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#fff"
                fill-rule="nonzero"
                d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                transform="translate(2 4)"
              ></path>
              <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
            </g>
          </svg>
          <h4>Friends</h4>
        </div>
        <div className="message">
          <div className="dm">
            <p>DIRECT MESSAGES</p>
            <AiOutlinePlus />
          </div>
          <div className="friend_list">
            {/* <div className="circle"></div>
            <div className="box"></div> */}
            <svg width="184" height="428" viewBox="0 0 184 428">
              <rect x="40" y="6" width="144" height="20" rx="10"></rect>
              <circle cx="16" cy="16" r="16"></circle>
              <rect
                x="40"
                y="50"
                width="144"
                height="20"
                rx="10"
                opacity="0.9"
              ></rect>
              <circle cx="16" cy="60" r="16" opacity="0.9"></circle>
              <rect
                x="40"
                y="94"
                width="144"
                height="20"
                rx="10"
                opacity="0.8"
              ></rect>
              <circle cx="16" cy="104" r="16" opacity="0.8"></circle>
              <rect
                x="40"
                y="138"
                width="144"
                height="20"
                rx="10"
                opacity="0.7"
              ></rect>
              <circle cx="16" cy="148" r="16" opacity="0.7"></circle>
              <rect
                x="40"
                y="182"
                width="144"
                height="20"
                rx="10"
                opacity="0.6"
              ></rect>
              <circle cx="16" cy="192" r="16" opacity="0.6"></circle>
              <rect
                x="40"
                y="226"
                width="144"
                height="20"
                rx="10"
                opacity="0.5"
              ></rect>
              <circle cx="16" cy="236" r="16" opacity="0.5"></circle>
              <rect
                x="40"
                y="270"
                width="144"
                height="20"
                rx="10"
                opacity="0.4"
              ></rect>
              <circle cx="16" cy="280" r="16" opacity="0.4"></circle>
              <rect
                x="40"
                y="314"
                width="144"
                height="20"
                rx="10"
                opacity="0.3"
              ></rect>
              <circle cx="16" cy="324" r="16" opacity="0.3"></circle>
              <rect
                x="40"
                y="358"
                width="144"
                height="20"
                rx="10"
                opacity="0.2"
              ></rect>
              <circle cx="16" cy="368" r="16" opacity="0.2"></circle>
              <rect
                x="40"
                y="402"
                width="144"
                height="20"
                rx="10"
                opacity="0.1"
              ></rect>
              <circle cx="16" cy="412" r="16" opacity="0.1"></circle>
            </svg>
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
        <div className="navbar">
          <ul>
            <li>
              <div className="friends">
                <svg
                  class="linkButtonIcon-7rsZcu"
                  aria-hidden="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="#72767D"
                      fill-rule="nonzero"
                      d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                      transform="translate(2 4)"
                    ></path>
                    <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                  </g>
                </svg>
                <h4>Friends</h4>
              </div>
            </li>
            <li></li>
            <li className="status"> Online </li>
            <li className="status"> All </li>
            <li className="status"> Pending </li>
            <li className="status"> Blocked </li>
            <li className="status"> Add Friend </li>
          </ul>
          <ul>
            <li>
              <svg
                x="0"
                y="0"
                class="icon-2xnN2Y"
                aria-hidden="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#B9BBBE"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="chat">
          <div className="wumpus">
            <img src="/assets/wumpus.svg" alt="Wumpus" />
            <p>No one's around to play with Wumpus.</p>
          </div>
          <div className="active_now">
            <h3>Active Now</h3>
            <div>
              <h4>It's quit for now...</h4>
              <h5>
                When a friend starts an activity—like playing a game or hanging
                out on voice—we’ll show it here!
              </h5>
            </div>
          </div>
        </div>
      </Chat>
    </Div>
  );
};

export default Dashboard;
