import React from 'react';

export default ({person, info}) => {
	return (
		<section className="intro-section">
			<div className="container">
				<div className="row">
					<div className="col-md-1 col-lg-2"></div>
					<div className="col-md-10 col-lg-8">
						<div className="intro">
							<div className="profile-img"><img src={require('./../img/wennie.jpg')} alt=""/></div>
							<h2><b>{person.name}</b></h2>
							<h4 className="font-white">{person.discription}</h4>
							<ul className="information margin-tb-30">
								{Object.keys(info).map((key, index) => (<li className="font-white"><b className="font-black">{key} : </b>{info[key]}</li>))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}