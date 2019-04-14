import React from 'react';
import HeaderButton from './HeaderButton'
import './../styles.css';


export default ({heads}) => {
	return (
		<header>
			<div className="heading-wrapper">
				<div className="row">
					{heads.map((item, index) => (<div className="col-sm-3 col-md-3 col-lg-3"><HeaderButton text={item} /></div>))}
				</div>
			</div>
		</header>
	)
}