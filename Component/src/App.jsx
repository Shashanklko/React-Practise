
// //Example 1
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import product from "./products";
// class Car extends React.Component {
//   render() {
//     return <h4>Hi, I am a Hyundai Car! I am white in color. I belong to Jitesh Bhatia</h4>;
//   }
// }
// function App(){
// return(
// <div>
// <Car />
// <Car />
// <Car />
// </div>
// );
// }//End App function 
// export default App;
// */
























/*
//Example 2
import React from 'react';
import ReactDOM from 'react-dom/client';
function Car(){
    return <h2>Hi, I am a Blue Car!</h2>;
  }
function App(){
return(
<div>
<Car />
<Car />
<Car />
</div>
);
}//End App function 
export default App;
*/







/*
//Example 3
function Car(props) {
  	return <h2>I am {props.owner}'s {props.color} Car! My number is {props.number}</h2>;
}
function App(){
return(
<div>
<Car color="red" number="UP25CB9302" owner="Jitesh"/>
<Car color="blue" number="UP25AK3018" owner="Jitin"/>
<Car color="white" number="UP85AP3665" owner="Gatik"/>
<Car color="gray" number="UP25CN3612" owner="Ashu"/>
<Car color="yellow" number="UP25CX0001" owner="Akshit"/>

</div>
);
}//End App function 
export default App;
*/

/*
//Example 4
class Car {
  constructor(name) {
    this.brand = name;
  }
present() {
    return 'I have a ' + this.brand;
  }
}
const mycar = new Car("BMW");
function App(){
return(
mycar.present()
);
}//End App function 
export default App;
*/

/*
//Example 5 (Inheritance)
class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return 'I have a ' + this.brand;
  }
}
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
function App(){
return(
mycar.show()
);
}//End App function 
export default App;
*/

/*
//Example 6 
const myArray = ['Phagwara', 'Jalandhar', 'Chandigarh', 'Amritsar', 'Ludhiana', "New Delhi", "Ayodhya", "Gorakhpur"];
const myList = myArray.map((item) => <option>{item}</option>)
//Define the App function used to render on the browser
function App(){
return(
<select>
{myList}
</select>
);
}//End App function 

//Export the App
export default App;


*/












/*
//Example 7 
const myelement = (
  <table border="1">
    <tr><th>Name</th></tr>
    <tr><td>John</td></tr>
    <tr><td>Elsa</td></tr>
    <tr><td>Nelson</td></tr>
    <tr><td>Abrahim</td></tr>
  </table>
);
function App(){
return(
myelement
);
}//End App function 
export default App;
*/


/*
//Example 8
import React from 'react';
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red", model:"GLC"};
  }
  render() {
    return <h2>I am a {this.state.color} {this.state.model} Car!</h2>;
  }
}//End of class
function App(){
return(
<Car />
);
}
export default App;
*/


/*
//Example 9
import React from 'react';
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car is {this.state.model} of {this.state.brand} having {this.state.color} color, that was built in {this.state.year} </h1>
      </div>
    );
  }
}
function App(){
return(
<Car />
);
}
export default App;
*/




//Example 10
import Car from './products.jsx';
function App(){
return(
<div>
<Car brand="Mercedes" models={["GLC", "EQA", "Maybach"]} colors={["White", "Black", "Silver"]}  year="2026" />
<Car brand="BMW" models={["X1", "X5", "i4", "i5", "i7"]} colors={["Red", "Blue", "Yellow"]} year="2025" />
<Car brand="Hyundai" models={["Santro", "Nios", "Aura", "Creta"]} colors={["Red", "White", "Yellow", "Silver", "Black"]} year="2026" />
</div>
);
}//End App function 
export default App;












/*
//Example 11
import React from 'react';
import ReactDOM from 'react-dom/client';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
*/
/*
//Example 12
import React from 'react';
import ReactDOM from 'react-dom/client';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: props.favcol,
    };
  }

  static getDerivedStateFromProps(props, state) {
          return {favoritecolor: props.favcol};
      }

  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  changeColor = () => {
	if(this.state.color=='red')
    		this.setState({ color: 'blue' });
	else
		this.setState({ color: 'red' });
		
  }

  render() {
    return (
      <div>
        <Header favcol={this.state.color} />
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/

/*
//Example 13
import React from 'react';
import ReactDOM from 'react-dom/client';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 5000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
*/

/*
//Example 14
import React from 'react';
import ReactDOM from 'react-dom/client';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true;
    //return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
*/


/*
//Example 15
import React from 'react';
import ReactDOM from 'react-dom/client';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 5000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
*/

/*
//Example 16
import React from 'react';
import ReactDOM from 'react-dom/client';

class Child extends React.Component {
  componentWillUnmount() {
    console.log("The component named Header is about to be unmounted."+ Date());
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }

    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);
*/