import React, { Component } from 'react';
class MidComponent extends Component {
   
    render() { 
        return ( 
        <React.Fragment>
            <section className="banner">
			<div className="container">
				<h1>Over 9,000 Ready to use icons <span className="green"> <b>100%</b> Free</span></h1>
				<div className="search-bar">
					<form>
						<div className="shadow">
							<select className="form-control">
								<option>Category </option>
							</select>													
							<button className="search-btn btn">search</button>
							<span className="table-work">
								<input type="" name="" className="form-control" placeholder="Type your icon name" required=""/>
								<button className="search-btn btn" id="search-btn-mobile">search</button>
							</span>	
						</div>
						<span className="all-rights"> All Right Reserved* </span>
					</form>
				</div>
			</div>
		</section>
		<section className="inner-haeding">
			<div className="container">
				<h2>9000+ Vector Icons for iOS, Android, Websites <br/> <span className="download_free_title">Download For Free</span></h2>
			</div>
    	</section>
		<section className="icon-categorie">
			<div className="container">
				<div className="row">
					<div className="col-lg col-sm-6 col-6" id="show-in-resp">
						<div className="icon-categorie-ico">
							<a href="listing-with-editor.html">
								<div className="tailor-bg">
									<img src="/assets/image/oneIcon.svg" alt="icon" style={{width:"unset"}}/>
								</div>
								<span>Line Icons</span>
							</a>
						</div>
					</div>
					<div className="col-lg col-sm-6 col-6" id="show-in-resp">
						<div className="icon-categorie-ico">
							<a href="listing-with-editor.html">
								<div className="tailor-bg">
									<img src="/assets/image/TwoIcon.svg" alt="icon" style={{width:"unset"}}/>
								</div>
								<span>Solid Icons</span>
							</a>
						</div>
					</div>
					<div className="col-lg col-sm-6 col-6" id="show-in-resp">
						<div className="icon-categorie-ico">
							<a href="listing-with-editor.html">
								<div className="tailor-bg">
									<img src="/assets/image/threeIcon.svg" alt="icon" style={{width:"unset"}}/>
								</div>
								<span>iOS Icons</span>
							</a>
						</div>
					</div>
					<div className="col-lg col-sm-6 col-6" id="show-in-resp">
						<div className="icon-categorie-ico">
							<a href="listing-with-editor.html">
								<div className="tailor-bg">
									<img src="/assets/image/FourIcon.svg" alt="icon" style={{width:"unset"}}/>
								</div>
								<span>Android Icons</span>
							</a>
						</div>
					</div>
					<div className="col-lg col-sm-6 col-6" id="show-in-resp">
						<div className="icon-categorie-ico">
							<a href="listing-with-editor.html">
								<div className="tailor-bg">
									<img src="/assets/image/FiveIcon.svg" alt="icon" style={{width:"unset"}}/>
								</div>
								<span>Website Icons</span>
							</a>
						</div>
					</div>
					<div className="col-lg col-sm-6 col-6" id="show-in-resp">
						<div className="icon-categorie-ico">
							<a href="listing-with-editor.html">
								<div className="tailor-bg">
									<img src="/assets/image/SixIcon.svg" alt="icon" style={{width:"unset"}}/>
								</div>
								<span>Mobile App Icons</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="start-features">
			<div className="container">
				<div className="inner-haeding">
					<h2> <span><img src="assets/image/icon-tailor-logo.svg" alt="Start My Icon" /></span> Features</h2>
				</div>
				<div className="features-box">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="features-inner-box">
								<a href="/" alt="">
									<span className="features-icon">
										<img src="assets/image/formats.png" alt=""/>
									</span>
									<div className="features-inner-content">
										<span>Formats</span>
										<p>PNG, SVG, EPS, PSD, Base 64, Iconfont or all of them</p>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="features-inner-box">
								<a href="/" alt="">
									<span className="features-icon">
										<img src="assets/image/continuous.png" alt=""/>
									</span>
									<div className="features-inner-content">
										<span>Continuous Production</span>
										<p>We produce over 60,000 icons every month</p>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="features-inner-box">
								<a href="/" alt="">
									<span className="features-icon">
										<img src="assets/image/collections.png" alt=""/>
									</span>
									<div className="features-inner-content">
									<span>Collections</span>
									<p>The most important feature of Smart My Icon .</p>
								</div>
								</a>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="features-inner-box">
								<a href="/" alt="">
									<span className="features-icon">
										<img src="assets/image/editable.png" alt=""/>
									</span>
									<div className="features-inner-content">
										<span>Editable Vectors</span>
										<p>We produce over 60,000 icons every month</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</React.Fragment>
    );
    }
}
 
export default MidComponent;