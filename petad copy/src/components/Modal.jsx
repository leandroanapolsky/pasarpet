import "./Modal.css";
import "./Button.css";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { petsContext } from "./Context";
import { logContext } from "./logContext";
const cookie = Cookies.get("token");
  console.log(cookie);

function Modal(props) {
  const { loggedIn, logUser, sendUserToContext } = useContext(logContext);

  const { modalShow, showLogin } = useContext(petsContext);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleSignMode = () => {
    setSignUpModal(!signUpModal);
  };

  const [signInObj, setSignInObj] = useState({
    username: "",
    password: "",
  });

  const checkSignIn = () => {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos enviados:", data);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });

    showLogin();
    logUser();
  };

  const [signUpObj, setSignUpObj] = useState({
    email: "",
    password: "",
    password2: "",
    phone: "",
    username: "",
  });

  const checkSignUp = () => {
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos enviados:", data);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });

    showLogin();
    logUser();
  };

  useEffect(()=> {
    if(cookie){
      fetch(`http://localhost:3001/user/auth`, { withCredentials: true }).then(res=>{console.log(res)});
          
          
    }
      },[])

  return (
    <>
      {modalShow ? (
        <div className="modal">
          {signUpModal ? (
            <div className="modal-card">
              <div className="modal-top">
                <h2>Sign Up</h2>{" "}
                <button className="main" onClick={(e) => showLogin()}>
                  X
                </button>
              </div>

              <label className="label">Email</label>
              <input
                type="text"
                className="modal-input"
                onChange={(e) =>
                  setSignUpObj({ ...signUpObj, email: e.target.value })
                }
              ></input>
              <label className="label">Username</label>
              <input
                type="text"
                className="modal-input"
                onChange={(e) =>
                  setSignUpObj({ ...signUpObj, username: e.target.value })
                }
              ></input>
              <label className="label">Password</label>
              <input
                type="password"
                className="modal-input"
                onChange={(e) =>
                  setSignUpObj({ ...signUpObj, password: e.target.value })
                }
              ></input>
              <label className="label">Repeat password</label>
              <input
                type="password"
                className="modal-input"
                onChange={(e) =>
                  setSignUpObj({ ...signUpObj, password2: e.target.value })
                }
              ></input>
              <label className="label">Phone number</label>
              <input
                type="text"
                className="modal-input"
                onChange={(e) =>
                  setSignUpObj({ ...signUpObj, phone: e.target.value })
                }
              ></input>
              <button className="main second" onClick={handleSignMode}>
                Sign In
              </button>
              <button className="main" onClick={checkSignUp}>
                Submit
              </button>
            </div>
          ) : (
            <div className="modal-card">
              <div className="modal-top">
                <h2>Sign In</h2>{" "}
                <button className="main" onClick={(e) => showLogin()}>
                  X
                </button>
              </div>
              <label className="label">Username</label>
              <input
                type="text"
                className="modal-input"
                onChange={(e) =>
                  setSignInObj({ ...signInObj, username: e.target.value })
                }
              ></input>
              <label className="label">Password</label>
              <input
                type="password"
                className="modal-input"
                onChange={(e) =>
                  setSignInObj({ ...signInObj, password: e.target.value })
                }
              ></input>

              <button className="main second" onClick={handleSignMode}>
                Sign Up
              </button>
              <button className="main" onClick={checkSignIn}>
                Submit
              </button>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Modal;
