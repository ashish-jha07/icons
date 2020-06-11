import React, { Component } from 'react';
class BrowseIconCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <section className="browse-Icon">
                <div className="container">
                    <div className="theme-heading">Browse Icon Category</div>
                    <div className="row">
                        <IconBox/>
                        <IconBox/>
                        <IconBox/>
                        <IconBox/>
                    </div>
                </div>

                <div className="center-btn center-btnn">
                    <a href="/" className="btn view-all-icon">View All Icon</a>
                </div>
        </section>
        <section className="main-iconEditor-video">
            <div className="container">
                <div className="row">
                    <div className="col editor-player">
                        <div className="video-main-parent">
                            <span></span>
                            <div className="video-child">
                                <h3>icon Editor Video</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="features-inner-box power-section-content">
                            <div className="features-inner-content feateures-icons-class">
                                <span>Poweful <span className="green" id="green"> icon</span> Editor</span>
                                <p>Do you want to change icon color, stroke and position?
                                    <br/> At <span><img src="img/icon-tailor-logo.svg" alt="Start My Icon"/></span> you can edit its size, position and colors until you find the appropriate style for your project.
                                </p>
                                <div className="center-btn center-btnn">
                                    <a href="/" className="btn view-all-icon">Start now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="custom-icon-apply-from">
            <div className="container">
                <div className="custom-strip">
                    <div className="custom-icon-head">
                        <h3>Do You Want A Custom Icons For <br/>Your Website And Apps?</h3>
                    </div>
                    <div className="custom-contact center-btnn">
                        <a href="/" className="btn large-bt">contact us</a>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
         );
    }
}

const IconBox = () => {
    return(
        <div className="col-sm-3">
            <div className="browse-pack">
                <a href="/" alt="">
                    <SpanRow/>
                    <SpanRow/>
                    <SpanRow/>
                    <p className="pack-name">Characters<span>2000</span></p>
                </a>
            </div>
        </div>
    )
}

const SpanRow = () => {
    return(
        <span>
            <img src="assets/image/icon/lock.png" className="browse-innner-icon" alt=""></img>
            <img src="assets/image/icon/lock.png" className="browse-innner-icon" alt=""></img>
            <img src="assets/image/icon/lock.png" className="browse-innner-icon" alt=""></img>
            <img src="assets/image/icon/lock.png" className="browse-innner-icon" alt=""></img>
        </span>
    )
}
 
export default BrowseIconCategory;