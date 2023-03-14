import { Link } from "react-router-dom";
import "./PetCard.css";
import "./Button.css";

function PetCard(props) {
  const { name, status, id } = props;
  return (
    
    <div className="pet-short-card">
      <div>PHOTO</div>
      <div className="pet-card-right">
        <h4>{name}</h4>
        <div>{status}</div>
        
        <button className="main"><Link to={{ pathname: `pet/${id}`}} className="nav-item">
                See More
              </Link></button>
        
      </div>
    </div>
    
    
  );
}

export default PetCard;
