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
  width: 26rem;
  height: max-content;
  background-color: #36393f;
  border-radius: 0.5rem;
  position: absolute;
  align-self: center;
  padding: 2rem;

  .details {
    display: flex;
    flex-direction: column;
    form {
      display: flex;
      flex-direction: column;
      input,
      select {
        margin-bottom: 1rem;
        padding: 0 0.6rem;
        height: 2.5rem;
        background-color: #313339;
        border: 1px solid #222428;
        color: #fff;
        font-size: 1rem;
        border-radius: 0.2rem;
        outline: none;

        :hover {
          border: 1px solid #000;
        }
      }
      .dropdown {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr;
        grid-gap: 1.5rem;
        margin-bottom: 0.5rem;
        select {
          color: #b1b3b7;
          option {
            max-height: 10rem;
          }
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
      margin-bottom: 1rem;
      font-size: 1rem;
      :hover {
        background-color: #4752c4;
        transition: 0.2s ease-in;
      }
    }
    span {
      color: #5d6167;
      font-family: Whitney;
      font-size: 0.7rem;
      a {
        font-size: 0.7rem;
      }
    }
  }
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  font-family: Whitney;
  text-align: center;
  margin-bottom: 1rem;
`;

const Register = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [];
  const years = [];
  function day() {
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
  }
  function year() {
    for (let i = 1870; i <= 2019; i++) {
      years.push(i);
    }
  }
  year();
  day();

  return (
    <Main>
      <img src="./assets/login_bg.svg" alt="Login_Bg" />
      <Detail>
        <div className="details">
          <H3>Create an account</H3>

          <form action="">
            <label htmlFor="">EMAIL </label>
            <input type="text" />
            <label htmlFor="">USERNAME</label>
            <input type="text" />
            <label htmlFor="">PASSWORD</label>
            <input type="password" />
            <label htmlFor="">DATE OF BIRTH</label>
            <div className="dropdown">
              <select>
                {months.map((month) => (
                  <option value="">{month}</option>
                ))}
              </select>
              <select>
                {days.map((day) => (
                  <option value="">{day}</option>
                ))}
              </select>
              <select>
                {years.map((year) => (
                  <option value="">{year}</option>
                ))}
              </select>
            </div>
            <button> Continue </button>
            <a href="/login">Already have an account?</a>
            <div>
              <span>
                By registering, you agree to Discord's{" "}
                <a href="#">Terms of service</a> and{" "}
                <a href="#">Privacy Policy.</a>
              </span>
            </div>
          </form>
        </div>
      </Detail>
    </Main>
  );
};

export default Register;
