// Filename - App.js

import React from "react";
import axios from "axios";

function App() {
  const fetchData = () => {
    //Connect to the given URL and get the data in the data JSON object, pass the data JSON object as a parameter to the .then block
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(data => {
        //Get the index entered by the user
        var idx = document.getElementById("idx").value;

        //Set the border of the existing table from 0px to 1pxhhhhh
        document.getElementById("result").border = "1px";

        //Put the values of the header in the table
        document.getElementById("fh").innerHTML = "ID";
        document.getElementById("sh").innerHTML = "TITLE";

        //Put the values into the cells in the first row
        document.getElementById("col1").innerHTML = data.data[idx - 1].id;
        document.getElementById("col2").innerHTML = data.data[idx - 1].title;
      })
      .catch(error => console.log(error));


  };




  return (
    <div className="App" align="center">
      <input type="text" name="idx" id="idx" placeholder="Enter the index to search" />
      <button onClick={fetchData}>
        Fetch Data
      </button>
      <br /><br />
      <table id="result">
        <thead><tr><th id="fh"></th><th id="sh"></th></tr></thead><tbody><tr><td id="col1"></td><td id="col2"></td></tr></tbody>
      </table>
    </div>
  );
}

export default App;

















