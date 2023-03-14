import { useParams } from "react-router-dom";
import "./Pet.css";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";

function Pet() {
  const { id } = useParams();

  const [mascota, setMascota] = useState([]);

  const getPetData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/pet/${id}`);
      const data = await response.json();
      setMascota(data);
    } catch (e) {
      console.log("error en el fetch del search por id", e);
    }
  };

  useEffect(() => {
    getPetData();
  }, []);

  return (
    <div>
      <Modal />
      <div className="pet-card">
        <div>PHOTO</div>
        <h3>{mascota.name}</h3>
        <div>Type: {mascota.type}</div>

        <div>Height: {mascota.height}</div>
        <div>Weight: {mascota.weight}</div>
        <div>Status: {mascota.status}</div>
        <div className="buttons-container">
          <button className="main">Adopt</button>
          <button className="main second">Foster</button>
          <button className="main second">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Pet;
