import React from 'react';
import './../styles.css';

export default ({person}) => {
	return (
		<section className="tab-section section">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="heading">
							<h3><b>About me</b></h3>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="margin-b-50">
							<h4><b>{person.name}</b></h4>
							<h6 className="margin-t-10">{person.discription}</h6>
							{person.profile.map((paragraph, key) => (<p className="font-semi-white margin-tb-30">{paragraph}</p>))}					
						</div>
					</div>
				</div>
			</div>
			
		</section>
	)
}