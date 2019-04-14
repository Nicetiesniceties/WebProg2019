import React from 'react';
import { NavLink } from 'react-router-dom'
import './../styles.css';

export default ({item}) => {
	return (
		<section className="tab-section section">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="heading">
							<h3><b><NavLink to="/Publications" className="title-button">{"<- Back"}</NavLink></b></h3>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="margin-b-50">
							<h4><b>{item.title}</b></h4>
							<h6 className="margin-t-10">{item.time}</h6>
							<p className="font-semi-white margin-tb-30">{item.abstract}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}