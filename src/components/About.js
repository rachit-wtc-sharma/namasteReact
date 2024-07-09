import React from 'react';
//Let's get classy - class based component


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            count: 0,
        }
    }
    handleIncrease() {
        this.setState({
            count: this.state.count+1
        })
    }
    handleDecrease() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <>
                <h1>This is about us component just to display functionality of counter</h1>
                <h3>Count:{this.state.count}</h3>
                <button onClick={this.handleIncrease.bind(this)}>Increase</button>
                <button onClick={this.handleDecrease.bind(this)}>Decrease</button>
            </>
        )
    }
}

export default About;