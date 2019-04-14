import React from 'react';
import './../styles.css';

export default ({data}) => {
	return (
		<section className="tab-section section">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="heading">
							<h3><b>Relative Pages</b></h3>
						</div>
					</div>
					<div className="col-sm-8">
						{data.map((item, key) => {
							return (
								<div className="margin-b-50">
									<h4><b>{item.title}</b></h4>
									<a className="title-button" href={item.link} target="_blank"><h6 className="margin-t-10">{item.link}</h6></a>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			
		</section>
	)
}