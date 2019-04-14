import React from 'react';
import { NavLink } from 'react-router-dom'
import './../styles.css';

export default ({data}) => {
	return (
		<section className="tab-section section">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="heading">
							<h3><b>Publications</b></h3>
						</div>
					</div>
					<div className="col-sm-8">
						{data.map((item, key) => {
							return (
								<div className="margin-b-50">
									<h4><b><NavLink to={"/Publications/" + item.title} className="title-button">{item.title}</NavLink></b></h4>
									<h6 className="margin-t-10">{item.time}</h6>
									<p className="font-semi-white margin-tb-30">{item.abstract_short}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			
		</section>
	)
}