import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

var fileNo = 1;
var fileName = "";

function App() {

  const fetchData = () => {
    fileName = fileNo + ".txt";

    axios.get("./text/" + fileName)
      .then((data) => {
        var splitlines = data.data.split(/\r?\n/);

        var str = "<tr><td>" + fileNo + ". " + splitlines[0] + "</td></tr>";
        str += "<tr><td>" + splitlines[1] + "</td></tr>";
        str += "<tr><td>" + splitlines[2] + "</td></tr>";
        str += "<tr><td>" + splitlines[3] + "</td></tr>";
        str += "<tr><td>" + splitlines[4] + "</td></tr>";

        document.getElementById("showQuestion").innerHTML = str;
      })
      .catch(() => console.log("Error: file does not exist"));
  };

  const next = () => {
    if (fileNo === 5) {
      alert("This is last Question");
    } else {
      fileNo++;
      fetchData();
    }
  };

  const prev = () => {
    if (fileNo === 1) {
      alert("This is first Question");
    } else {
      fileNo--;
      fetchData();
    }
  };

 fetchData();

 // useEffect(() => {
   // fetchData();
 // }, []);

  return (
    <div className="App">
      <div>
        <table id="showQuestion" border="2"></table>

        <table border="2">
          <tbody>
            <tr>
              <td><button onClick={prev}>Prev</button></td>
              <td><button onClick={next}>Next</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;