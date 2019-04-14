import React from 'react';
import { NavLink } from 'react-router-dom'
import './../styles.css';

export default ({text}) => {
	return (
		<button>
			<NavLink to={'/' + text} className='header-button'>
				<h5>{text}</h5>
			</NavLink>
		</button>
	)
}