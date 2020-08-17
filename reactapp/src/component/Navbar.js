import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
	return (
		<div className="container m-3">
			<div className="col-md-12 bg-warning text-white p-2 text-center">
				<h1>{props.name}</h1>
			</div>
		</div>
	)
}

Navbar.propTypes = {
	name: PropTypes.string.isRequired
}

Navbar.defaultProps = {
	name:"Bu Alan Bos Buraxa Bilmezsen"
}
export default Navbar;
