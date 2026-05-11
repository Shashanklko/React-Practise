import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: props.brand,
            model: props.model,
            color: props.color
        };
    }

    changeColor = (event) => {
        this.setState({ color: event.target.value });
    }

    changeModel = (event) => {
        this.setState({ model: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>

                Choose Color
                <select value={this.state.color} onChange={this.changeColor}>
                    <option>White</option>
                    <option>Red</option>
                    <option>Green</option>
                </select>

                <br /><br />

                Choose Model
                <select value={this.state.model} onChange={this.changeModel}>
                    <option>GLC</option>
                    <option>Limousine</option>
                    <option>Roadster</option>
                </select>

                <p>
                    You have chosen to buy {this.state.color}, {this.state.model}
                </p>
            </div>
        );
    }
}

export default Car;