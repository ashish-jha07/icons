import React, { Component } from 'react';
import {Modal, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Header extends Component {
    
  

    constructor(props) {
        super(props);
        this.state = { 
            modal: false,
            dropdownOpen: false,
            lang: "EN"
         }
        
    }
    
    toggle = () => {
        const {modal} = this.state;
        this.setState({modal: !modal});
    }

    dropdownChange = () => {
        const {dropdownOpen} = this.state;
        this.setState({dropdownOpen: !dropdownOpen});
    }

    render() {  
        return ( 
        <React.Fragment>
            <header>
            <div className="container">
                <div className="header-top">
                    {/**add onclick event to redirect on home screen */}
                    <a className="navbar-brand" href="/index.html">
                        <img src="assets/image/icon-tailor-logo.svg" alt="Start My Icon" />
                    </a>
                    <div className="header-btn main_dropdown_header">
                    <div className="dropdown show">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownChange}>
                        <DropdownToggle caret className="btn language-btn-header dropdown-toggle">
                            {this.state.lang}<i className="material-icons">keyboard_arrow_down</i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header><span><img src="assets/image/us-flag.png" alt="" style={{width: "20px"}}/></span> English (US)</DropdownItem>
                            <DropdownItem header><span><img src="assets/image/france.svg" alt ="" style={{width: "20px"}} /></span> French</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                        <button className="link-head" onClick={this.toggle}>Login</button>

                    </div>
                    </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
    
        </header>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={""}>
        <div className="modal-body">
            <div className="popup-head">
                <h4>Sign up</h4>
                <p>With Your Social Network</p>
            </div>
            <div className="popup-content">
                <div className="social-connector">
                    <a href="/" className="google"><span><img src="assets/image/icon/search.svg" alt=""/></span> Google</a>
                    <a href="/" className="facebook"><span><img src="assets/image/icon/facebook-logo.svg" alt=""/></span> Facebook</a>
                    <a href="/" className="twitter"><span><img src="assets/image/icon/twitter.svg" alt = ""/></span> Twitter</a>
                </div>
                <span className="or-opt"></span>
                <form className="row">
                    <div className="form-group col-sm-12">
                        <input type="email" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="form-group col-sm-12">
                        <select className="form-control">
                            <option>Email</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-12">
                        <div className="input-group" id="show_hide_password">
                            <input className="form-control" type="password" placeholder="Password"/>
                            <div className="input-group-addon">
                                <a href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="other-info col-sm-12 p-0">
                            Your password must be at least 6 characters long and must contain letters, numbers and special characters. Cannot contain whitespace.
                        </div>
                        <div className="form-check col-sm-12 p-0">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="popupcheck"/>
                                <label className="custom-control-label" for="popupcheck"> I wish to receive newsletters, promotions and news from My Smart Icon.</label>
                            </div>
                            <a href="/" className="btn full-btn">Sign UP</a>
                        </div>
                        <span className="already">Already registered?<a href="JavaScript:void(0)" data-toggle="modal" data-target="#signin" className="green" data-dismiss="modal"> Sign in</a></span>   
                    </div>
                </form>
            </div>
        </div>
    </Modal>
      </React.Fragment>
         );
    }
}
 
export default Header;