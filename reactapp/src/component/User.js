import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import UserComsumer from '../context';

class User extends Component {
	static defaultProps={
		name: "Bu Alan Bos Buraxila Bilmez",
		veziyfe: "Bu Alan Bos Buraxila Bilmez",
		maas: "Bu Alan Bos Buraxila Bilmez"

	}

	state = {
		isVisible:false
	}



	OnClickEvent= (e) => {
		this.setState({
			isVisible: ! this.state.isVisible
		})
	}

	onDeletUser = (dispatch, e) => {
		const { id } = this.props;
		//Comsumer Dispatch
		dispatch({type:"DELETE_USER",payload:id})

		
	}

	componentWillUnmount = () => {
		console.log("Component Will Unmount")
	}
	
	render() {

		const { name, veziyfe, maas } = this.props;

		const { isVisible } = this.state;
		return (
			<UserComsumer>
				{
					value => {
						const { dispatch } = value;

						return (
	
							<div className="col-md-4 mb-2">
								<div className="card text-white" style={isVisible ?{backgroundColor:"red"}:{backgroundColor:"#535c68"}}>
									<div className="card-header d-flex justify-content-between">
										<h4  onClick={this.OnClickEvent.bind(this)} style={{cursor:"pointer"}}>{name}</h4>
										<i className="fa fa-trash fa-2x" onClick={this.onDeletUser.bind(this,dispatch)} style={{cursor:"pointer"}}></i>
									</div>
									{
										isVisible ? <div className="card-body bg-dark">
													<h5 className="card-title">Veziyfe : {veziyfe}</h5>
													<p className="card-text">Maas : {maas} Azn</p>
												</div> : null
									}
								</div>
							</div>
								
								
					)

					}
				}
		
			</UserComsumer>
		)

		
	}
}

User.propTypes = {
	name: PropsTypes.string.isRequired,
	veziyfe: PropsTypes.string.isRequired,
	maas: PropsTypes.string.isRequired,
	id:PropsTypes.string.isRequired
	
}

export default User;