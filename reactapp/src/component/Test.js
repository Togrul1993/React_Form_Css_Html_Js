import React, { Component } from 'react'

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 10,
			b: 20,
			
		}
		console.log("constructor")
	}
	componentDidMount = () => {
		console.log("componentDidMount")
		//Api istek alani
		this.setState({
			a:35
		})
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log("componentDidUpdate")
	}

	shouldComponentUpdate = () => {
		console.log("Should Component Update")
		return true;
	}
	
	
	render() {
		console.log("render");
		return (
			<div>
				<h1>Salam Azerbaycan</h1>
			</div>
		)
	}
}
export default Test;