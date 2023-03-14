import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

import Pet from "./views/Pet";
import Test from "./views/Test";
import Home from "./views/Home";
import Search from "./views/Search";
import User from "./views/User";
import Dashboard from "./views/Dashboard";
import MyPets from "./views/MyPets";
import AddPet from "./views/AddPet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/pet/:id" element={<Pet />} />
          <Route path="/pet/:id" element={<Pet />} />
          <Route path="/user" element={<User />} />
          <Route path="/test" element={<Test />} />
          <Route path="/myPets" element={<MyPets />} />
          <Route path="/admin/addpet" element={<AddPet />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
