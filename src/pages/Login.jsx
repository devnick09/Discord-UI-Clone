import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: #5865f2;
  height: 100vh;
  overflow-y: hidden;

  display: flex;
  justify-content: center;

  img {
    width: 100vw;
  }
`;
const Detail = styled.div`
  width: 45rem;
  height: 48vh;
  background-color: #36393f;
  border-radius: 0.5rem;
  position: absolute;
  align-self: center;
  padding: 2rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  .details {
    display: flex;
    flex-direction: column;
    form {
      display: flex;
      flex-direction: column;
      input {
        margin-bottom: 1rem;
        padding: 0 0.6rem;
        height: 2.5rem;
        background-color: #313339;
        border: 1px solid #222428;
        color: #fff;
        font-size: 1rem;
        border-radius: 0.2rem;
        :hover {
          border: 1px solid #000;
        }
      }
      input:focus {
        outline: none !important;
        border-color: #00aff4;
      }
      label {
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        color: #b1b3b7;
      }
    }
    a {
      color: #00aff4;
      font-family: Whitney;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      margin-top: -0.5rem;
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    button {
      transition: 0.2s ease-out;
      background-color: #5865f2;
      border-radius: 0.2rem;
      color: #fff;
      margin-bottom: 0.6rem;
      font-size: 1rem;
      width: 100%;
      :hover {
        background-color: #4752c4;
        transition: 0.2s ease-in;
      }
    }
    span {
      color: #5d6167;
      font-family: Whitney;
      font-size: 0.9rem;
    }
  }
  .qr {
    /* margin: 2rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    .qr_both {
      position: relative;
      .qr_code {
        height: 170px;
        width: 170px;
        border: 0.5rem solid #fff;
        border-radius: 0.5rem;
        margin: 2rem 0;
      }
      .qr_discord {
        height: 50px;
        width: 50px;
        position: absolute;
        top: 40%;
        left: 35%;
      }
    }
  }
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  font-family: Whitney;
  text-align: center;
  margin-bottom: 0.5rem;
`;
const P = styled.p`
  font-size: 1rem;
  color: #b1b3b7;
  text-align: center;
  font-family: Whitney-light;
  margin-bottom: 1rem;
`;

const Login = () => {
  return (
    <Main>
      <img src="./assets/login_bg.svg" alt="Login_Bg" />
      <Detail>
        <div className="details">
          <H3>Welcome back!</H3>
          <P>We're so excited to see you again!</P>
          <form action="/login/dashboard">
            <label htmlFor="">EMAIL OR PHONE NUMBER</label>
            <input type="text" />
            <label htmlFor="">PASSWORD</label>
            <input type="password" />
            <a href="#">Forget your password?</a>

            <button> Login </button>

            <div>
              <span>
                Need an account? <a href="/register">Register</a>
              </span>
            </div>
          </form>
        </div>
        <div className="qr">
          <div className="qr_both">
            <img className="qr_code" src="./assets/qr_code.png" alt="QR-Code" />
            <img
              className="qr_discord"
              src="./assets/qr_discord.png"
              alt="Discord"
            />
          </div>

          <H3>Log in with QR Code</H3>
          <P>
            Scan with this the{" "}
            <span>
              Discord mobile
              <br /> app
            </span>{" "}
            to log in instantly.
          </P>
        </div>
      </Detail>
    </Main>
  );
};

export default Login;
