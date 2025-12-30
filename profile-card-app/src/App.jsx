import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <h2>Personal Profile Card</h2>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <div className="card">
        <h3>Profile</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
}

export default App;
