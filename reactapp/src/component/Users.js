import React, { Component } from 'react';
import User from './User';
import UserConsumer from '../context';

class Users extends Component {
	render() {

		return (
			<UserConsumer>
				{
					value => {
						const { users } = value;

						return (
							<div className="row">
								{
									users.map(user => {
										return (
											<User
												key={user.id}
												id={user.id}
												name={user.name}
												veziyfe={user.veziyfe}
												maas={user.maas}
											/>
										)
									})
								}
							</div>
						)
					}
				}
			</UserConsumer>
		)
		
	}
}
export default Users;