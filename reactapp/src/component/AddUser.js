import React, { Component } from 'react';
import UserComsumer from '../context';
import posed from 'react-pose';

var uniqid = require('uniqid');

const Animation = posed.div({
	visible: {
		opacity: 1,
		applyAtStart: {
			display:"block"
		}
		
	},
	hidden: {
		opacity: 0,
		applyAtEnd: {
		display:"none"
		}
	}
});

class AddUser extends Component {
	state = {
		visible: false,
		name: "",
		veziyfe: "",
		maas:""
	}

	changeVisibility = (e) => {
		this.setState({
			visible: !this.state.visible
		})
	}

	changeInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
			
		})
	}

	addUser = (dispatch,e) => {
		e.preventDefault();
		const { name, maas, veziyfe } = this.state;

		const newUser = {
			id:uniqid(),
			name,
			veziyfe,
			maas
		}
		dispatch({type:"Add_User",payload:newUser})
		
	}


	render() {
		const { visible, name, veziyfe, maas } = this.state;
		return(
			<UserComsumer>
				{
					value => {
					
						const { dispatch } = value;
						return (
							<div className="col-md-4">
								
								<button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-3 ml-1" style={visible ? {backgroundColor:"#535c68"} : {backgroundColor:"#718093"}}>{visible ? "Form Gizlət" : "Form Goster"}</button>
								
								<Animation pose={visible ? "visible" : "hidden"}>
									
									<div className="card">
										
										<div className="card-header">
											
											<h4>Istifadəçi Forması Elavə Edin</h4>

										</div>

										<div className="card-body">
											
											<form onSubmit={this.addUser.bind(this,dispatch)}>
												<div className="form-group">
													<label htmlFor="name">Ad :</label>

													<input
														type="text"
														name="name"
														id="name"
														placeholder="Adini Gir"
														className="form-control"
														value={name}
														onChange={this.changeInput}></input>

												</div>
								
												<div className="form-group">

													<label htmlFor="veziyfe">Veziyfe :</label>
								
													<input
														type="text"
														name="veziyfe"
														id="veziyfe"
														placeholder="Veziyfe Gir"
														className="form-control"
														value={veziyfe}
														onChange={this.changeInput}></input>
												</div>
								
								
												<div className="form-group">

													<label htmlFor="maas">Maas :</label>
								
													<input
														type="text"
														name="maas"
														id="maas"
														placeholder="Maas Gir"
														className="form-control"
														value={maas}
														onChange={this.changeInput}
								
													></input>
												</div>
								
												<button type="submit" className="btn btn-danger btn-block">Yadda Saxla</button>
											</form>	
										</div>
									</div>
								</Animation>
							</div>
						)
					}
				}
			</UserComsumer>
		)
		
	}
}
export default AddUser;