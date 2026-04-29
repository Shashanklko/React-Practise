import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: props.brand,
      model: props.models[0],   // default first model
      color: props.colors[0],   // default first color
      year: props.year,
      };
  }

  changeColor = (e) => {
    this.setState({ color: e.target.value });
  };

  changeModel = (e) => {
    this.setState({ model: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>

        Choose Color
        <select value={this.state.color} onChange={this.changeColor}>
          {this.props.colors.map(
		(color) => (<option>{color}</option>)
	   )}
        </select>

        <br />

        Choose Model
        <select value={this.state.model} onChange={this.changeModel}>
          {this.props.models.map(
		(model) => (<option>{model}</option>)
         )}
        </select>

        <p>
          You have chosen to buy {this.state.color} {this.state.model} in {this.state.year}.
        </p>
      </div>
    );
  }
}

export default Car;
