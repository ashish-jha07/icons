import React, { useState ,Fragment} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  

  const [modal, setModal] = useState(false);

  const toggleLogin = (props) => setModal(!modal);
  const handleShow =() => {
    setModal(true)
}
const handleClose = () => {
    setModal( false )
}
// this.handleShow = handleShow.bind(this);

  return (
<div>
      {/* <Button color="danger" onClick={toggleLogin} className={className}>{buttonLabel} </Button> */}
    
      <Modal isOpen={modal} toggle={toggleLogin} className={className}>
        {/* <ModalHeader toggle={toggleLogin}>Modal title</ModalHeader> */}
        
                      <button type="button" class="close" data-dismiss="modal" onClick={() => toggleLogin(false)}>&times;</button>
                          <div class="modal-body">
                              <div class="popup-head">
                                  <h4>Sign in</h4>
                                  <p>With Your Social Network</p>
                              </div>
                              <div class="popup-content">
                                  <div class="social-connector">
                                      <a href="#" class="google"><span><img src="icon/search.svg" /></span> Google</a>
                                      <a href="#" class="facebook"><span><img src="icon/facebook-logo.svg" /></span> Facebook</a>
                                      <a href="#" class="twitter"><span><img src="icon/twitter.svg" /></span> Twitter</a>
                                  </div>
                                  <span class="or-opt"></span>
                                  <form>
                                    <div class="form-group">
                                      <input type="email" class="form-control" placeholder="Username or email" />
                                    </div>
                                    <div class="form-group">
							<div class="input-group" id="show_hide_password">
						  <input class="form-control" type="password" placeholder="Password"/>
						  <div class="input-group-addon">
							<a href="/"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
						  </div>
						</div>

                                <div class="form-check pdt-0">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="popupcheck2" />
                                        <label class="custom-control-label" for="popupcheck2"> Keep me signed in</label>
                                    </div>
                                </div>
                                <a href="/" class="btn full-btn">Sign in</a>
                                <div class="rem-pass">
                                    <span class="float-left">Not a member? <a href="JavaScript:void (0)" class="green"  data-toggle="modal" data-target="#signup"   data-dismiss="modal">Sign up</a></span>
                                    <span class="float-right"><a href="JavaScript:void(0)" class="green" data-toggle="modal" data-target="#reset"   data-dismiss="modal">I can't remember my password</a></span>
                                </div>

                            </div>
                        </form>

                    </div>

                </div>
        
        
  

</Modal>

    </div>
  );
}

export default ModalExample;