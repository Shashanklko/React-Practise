import React from "react";
import axios from "axios";

function App() {

  let playersData = []; 

  const fetchData = () => {
    axios.get("/players.txt")
      .then((res) => {
        playersData = res.data;
        displayPlayers(playersData); 
      })
      .catch((err) => console.log(err));
  };

  const filterData = () => {
    let sport = document.getElementById("sport").value;

    let filtered = playersData.filter(
      (p) => p.sport.toLowerCase() === sport.toLowerCase()
    );

    displayPlayers(filtered);
  };

  const displayPlayers = (data) => {
    let list = document.getElementById("result");
    list.innerHTML = "";

    data.forEach((player) => {
      let li = document.createElement("li");
      li.innerHTML = player.name;
      list.appendChild(li);
    });
  };

  return (
   <center>
      <h2>Players List</h2>

      <button onClick={fetchData}>Load Players</button>

    <p>Enter sport:
      <input
        type="text"
        id="sport"
        placeholder="Enter sport (Cricket, Football...)"
      />

      <button onClick={filterData}>Filter</button></p>

      <ul id="result"></ul>
    </center>
  );
}

export default App;