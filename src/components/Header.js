import React, { Component } from 'react';
import {Modal, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal: false,
            dropdownOpen: false,
            lang: "EN",
            displayScr : "Signup"
         }
    }

    changeScreen = (scr) => {
        this.setState({ displayScr: scr})
    }

    languageChange = (language) => {
        this.setState({lang: language})
    }

    toggle = () => {
        const {modal} = this.state;
        this.setState({modal: !modal});
        this.changeScreen("Signup");
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
                                <DropdownItem onClick={()=>this.languageChange('English (US)')}><span><img src="assets/image/us-flag.png" alt="" style={{width: "20px"}}/></span> English (US)</DropdownItem>
                                <DropdownItem onClick={()=>this.languageChange('French')}><span><img src="assets/image/france.svg" alt ="" style={{width: "20px"}} /></span> French</DropdownItem>
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
            {
             this.state.displayScr === "Signup" &&
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
                                <span className="already">Already registered?<a href="JavaScript:void(0)" onClick={()=>this.changeScreen("Signin")} data-toggle="modal" data-target="#signin" className="green" data-dismiss="modal"> Sign in</a></span>   
                            </div>
                        </form>
                    </div>
                </div>
            }
            {
            this.state.displayScr === "Signin" &&
                <div className="modal-body">
                    <div className="popup-head">
                        <h4>Sign in</h4>
                        <p>With Your Social Network</p>
                    </div>
                    <div className="popup-content">
                        <div className="social-connector">
                            <a href="/" className="google"><span><img src="icon/search.svg"/></span> Google</a>
                            <a href="/" className="facebook"><span><img src="icon/facebook-logo.svg"/></span> Facebook</a>
                            <a href="/" className="twitter"><span><img src="icon/twitter.svg"/></span> Twitter</a>
                        </div>
                        <span className="or-opt"></span>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Username or email"/>
                            </div>
                            <div className="form-group">
                                <div className="input-group" id="show_hide_password">
                                    <input className="form-control" type="password" placeholder="Password"/>
                                    <div className="input-group-addon">
                                    <a href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="form-check pdt-0">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="popupcheck2"/>
                                    <label className="custom-control-label" for="popupcheck2"> Keep me signed in</label>
                                </div>
                            </div>
                            <a href="#" className="btn full-btn">Sign in</a>
                            <div className="rem-pass">
                                <span className="float-left">Not a member? <a href="JavaScript:void(0)" className="green" onClick={()=>this.changeScreen("Signup")} data-toggle="modal" data-target="#signup" data-dismiss="modal">Sign up</a></span>
                                <span className="float-right"><a href="JavaScript:void(0)" onClick={()=>this.changeScreen("Password")} className="green" data-toggle="modal" data-target="#reset" data-dismiss="modal">I can't remember my password</a></span>
                            </div>   
                        </div>
                    </form>
                </div>
                </div>
            }
            {
            this.state.displayScr === "Password" &&
                <div className="modal-body">
                    <div className="popup-head">
                        <h4>Reset password</h4>
                        <p>Enter your username or email to reset your password</p>
                    </div>
                    <div className="popup-content">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Type Your Email"/>
                            </div>
                            <a href="#" className="btn full-btn">Sign in</a>
                            <div className="rem-pass">
                                <span className="float-left">Sign in  <a href="JavaScript:void (0)" onClick={()=>this.changeScreen("Signin")} className="green" data-toggle="modal" data-target="#signin" data-dismiss="modal">Sign in</a></span>
                                <span className="float-right">Not a member? <a href="JavaScript:void (0)" className="green" data-toggle="modal" data-target="#signup" data-dismiss="modal" onClick={()=>this.changeScreen("Signup")}>Sign up</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </Modal>
        </React.Fragment>
      
         );
    }
}
 
export default Header;