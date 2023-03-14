import { useState } from "react";
import "./Search.css";
import "../components/Button.css";
import Modal from "../components/Modal";
import PetCard from "../components/PetCard";

function Search() {
  const [advance, setAdvance] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const [searchObj, setSearchObj] = useState({
    type: "",
    status: "",
    height: 0,
    weight: 0,
    name: "",
  });

  const advSearch = async () => {
    try {
      
      
      const response = await fetch(
        `http://localhost:3001/search?type=${searchObj.type}&status=${searchObj.status}&height=${searchObj.height}&weight=${searchObj.weight}&name=${searchObj.name}`
      );
      const data = await response.json();
      // console.log(data);
      setSearchResults([...data]);
      console.log("search results", searchResults);
      // return data;
    } catch (e) {
      console.log("error en el fetch del search", e);
    }
  };

  const search = async () => {
    try {

      
      const response = await fetch(
        `http://localhost:3001/search?type=${searchObj.type}`
        
      );
      const data = await response.json();
      // console.log(data);
      setSearchResults([...data]);
      console.log("search results", searchResults);
      return data;
    } catch (e) {
      console.log("error en el fetch del search", e);
    }
  };

  const toggleAdvance = () => {
    setAdvance(!advance);
  };

  return (
    <>
      <div className="search-form">
        <Modal />
        <h1>Search pets</h1>
        {advance ? (
          <div>
            <div className="search-form">
              <label className="label">Type</label>
              <select
                onChange={(e) =>
                  setSearchObj({ ...searchObj, type: e.target.value })
                }
              >
                <option value="-">-</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
              <label className="label">Adoption Status</label>
              <select
                onChange={(e) =>
                  setSearchObj({ ...searchObj, status: e.target.value })
                }
              >
                <option value="-">-</option>
                <option value="available">available</option>
                <option value="fostered">Fostered</option>
                <option value="adopted">Adopted</option>
              </select>
              <label className="label">Height</label>
              <input
                type="text"
                onChange={(e) =>
                  setSearchObj({ ...searchObj, height: e.target.value })
                }
              />
              <label className="label">Weight</label>
              <input
                type="text"
                onChange={(e) =>
                  setSearchObj({ ...searchObj, weight: e.target.value })
                }
              />
              <label className="label">Name</label>
              <input
                type="text"
                onChange={(e) =>
                  setSearchObj({ ...searchObj, name: e.target.value })
                }
              />
            </div>
            {/* <div className="results-card-cont">
              {searchResults.map((item) => (
                <PetCard name={item.name} status={item.status} />
              ))}
            </div> */}
          </div>
        ) : (
          <div>
            <label className="label">Type</label>
            <select
              onChange={(e) =>
                setSearchObj({ ...searchObj, type: e.target.value })
              }
            >
              <option value="-">-</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}

        <div>
          <label className="label">Advanced search</label>
          <input type="checkbox" onChange={(e) => toggleAdvance()} />
        </div>
        {advance ? (
          <button onClick={advSearch} className="main">
            Search
          </button>
        ) : (
          <button onClick={search} className="main">
            Search
          </button>
        )}
      </div>

      <div className="results-card-cont">
        {searchResults.map((item) => (
          <PetCard name={item.name} status={item.status} id={item._id}/>
        ))}
      </div>
    </>
  );
}

export default Search;
