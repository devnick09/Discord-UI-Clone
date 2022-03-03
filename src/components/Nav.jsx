import React from "react";
import styled from "styled-components";
const NavBar = styled.div`
  display: flex;
  height: max-content;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #fff;
  .menu {
    display: flex;
    align-items: center;
    padding: 0;
    a {
      margin: 0 1.5rem;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .login {
    :hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transition: box-shadow 0.3s ease-in-out;
    }
  }
`;
const Main = styled.div`
  background-color: #404eed;
`;

export const Nav = () => {
  return (
    <Main>
      <NavBar className="layout">
        <div className="logo">
          <img
            src="./assets/discord.svg"
            alt="Error"
            width="134px"
            height="50px"
          />
        </div>
        <div className="menu">
          <a href="/">Download</a>
          <a href="/">Nitro</a>
          <a href="/">Safety</a>
          <a href="/">Support</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
        </div>
        <a href="/login">
          <button className="login">
            <p>Login</p>
          </button>
        </a>
      </NavBar>
    </Main>
  );
};
