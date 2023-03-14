import "./Home.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState, useContext, useEffect } from "react";
import { logContext } from "../components/logContext";

import { petsContext } from "../components/Context";

function Home() {
  const { loggedIn, logUser } = useContext(logContext);
  const { modalShow, showLogin } = useContext(petsContext);
  // const cookie = Cookies.get("token");
  // console.log(cookie);
  // const [modalShow, setModalShow] = useState(false);

  // const showLogin = () => {
  //   setModalShow(!modalShow);
  //   console.log('login')
  // };

//   useEffect(()=> {
// if(cookie){
//   fetch(`http://localhost:3001/user/auth`, { withCredentials: true }).then(res=>{console.log(res)});
      
      
// }
//   },[])

  return (
    <>
      <div className="home-container">
        <Modal />
        <div className="cont-left">
          <h1>Ready? Pet, Go!</h1>
          <p>
            Don't you wonder what does addopting a pet feels like? Join our
            community and find out. Hundreds of pets are waiting for you to meet
            them!
          </p>
          {loggedIn ? (
            <button className="main">
              <Link to={{ pathname: "/user" }} className="nav-item">
                My personal area
              </Link>
            </button>
          ) : (
            <button className="main" onClick={(e) => showLogin()}>
              Log In
            </button>
          )}
          {/* <button className="main"  onClick={(e) => showLogin()}>Log In</button> */}
        </div>
        <img src="https://paradepets.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1254/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.webp"></img>
      </div>
    </>
  );
}

export default Home;
