import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header>
            <div className="container">
                <div className="header-top">
                    {/**add onclick event to redirect on home screen */}
                    <a className="navbar-brand" href="/index.html">
                        <img src="assets/image/icon-tailor-logo.svg" alt="Start My Icon" />
                    </a>
                    <div className="header-btn main_dropdown_header">
                        <div className="dropdown">
                            <button className=" btn language-btn-header dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                EN <i className="material-icons">keyboard_arrow_down</i>
                                {/* <!--  <span className="caret"> </span> --> */}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a href="/s" data-value="action"><span><img src="img/us-flag.png" alt=""/></span> English (US)</a></li>
                                <li><a href="/a" data-value="another action"><span><img src="img/france.svg" alt =""/></span> French</a></li>
                            </ul>
                              {/* here we add modal show event to show modal  */}
                            <a href="/ss" className="link-head" data-toggle="modal" data-target="#signup">Login</a>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </header>
      
         );
    }
}
 
export default Header;