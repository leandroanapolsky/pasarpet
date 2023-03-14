import "./User.css";
import Modal from "../components/Modal";
import PetCard from "../components/PetCard";
import { useContext } from "react";
import { logContext } from "../components/logContext";

function User() {
  const { loggedIn, logUser } = useContext(logContext);


  
  return (
    <div>
      <Modal />
      <div className="user-card">
        <div>aca tiene que ir la foto</div>
        <h3>Nombre del User</h3>

        <label className="user-label">Password</label>
        <input type="text" className="user-input"></input>
        <label className="user-label">email</label>
        <input type="text" className="user-input"></input>
        <label className="user-label">First Name</label>
        <input type="text" className="user-input"></input>
        <label className="user-label">Last Name</label>
        <input type="text" className="user-input"></input>
        <label className="user-label">Phone Number</label>
        <input type="text" className="user-input"></input>
        <label className="user-label">Bio</label>
        <input type="text" className="user-input"></input>

        <button className="main">Save Changes</button>
        <button className="main second" onClick={(e) => logUser()}>
          Log Out
        </button>
      </div>
      {/* <div>
        <h3>My pets</h3>
        <PetCard/>
        <PetCard/>
        <PetCard/>
      </div> */}
    </div>
  );
}

export default User;
