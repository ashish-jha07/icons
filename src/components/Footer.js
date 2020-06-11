import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.nav = [
           {title: "INFOMATION", list: [{listTitle: "About Us", path:"/"},{listTitle: "Contact Us", path:"/"},{listTitle: "Partnerships", path:"/"},{listTitle: "Terms & Conditions", path:"/"},{listTitle: "Privacy Policy", path:"/"}   ]},
           {title: "COMMUNITY", list: [{listTitle: "Blog", path:"/"},{listTitle: "Forum", path:"/"},{listTitle: "Become a Author", path:"/"}]},
           {title: "CONTENT", list: [{listTitle: "Categories", path:"/"},{listTitle: "Authors", path:"/"},{listTitle: "Top Icons", path:"/"},{listTitle: "Latest Icons", path:"/"},{listTitle: "Tags", path:"/"},{listTitle: "Icon Editor", path:"/"}]},
           {title: "COMPANY", list: [{listTitle: "Careers", path:"/"},{listTitle: "Press & News", path:"/"},{listTitle: "Feedback", path:"/"},{listTitle: "Investor Relations", path:"/"}]}
        ]
    }
    render() { 
        return ( 
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="foot-box">
                            <div className="firstfooter-block">
                                <img src="assets/image/icon-tailor-logo.svg" alt="Start My Icon" className="img-fluid" id="foot-img"/>
                                <ul>
                                    <li><a href="/">Privacy Policy</a> </li>
                                    <li><a href="/">Terms of Service</a></li>
                                </ul>
                                <span><a href="/">© Icon Tailor. 2019</a></span>
                            </div>
                            <div className="icons-footer">
                                <ul>
                                    <li><a href="/" className="facebook_color" alt=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="/" className="twitter_color" alt=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="/" className="linkedin_color" alt=""><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="/" className="insta_color" alt=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="/" className="pinterest_color" alt=""><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {
                            this.nav.map((item)=>
                                <div className="foot-box">
                                    <div className="links-footers">
                                        <h1 className="theme-heading-footer">{item.title}</h1>
                                        <ul>
                                            {
                                                item.list.map((listItem)=>
                                                    <li><a href={listItem.path}>{listItem.listTitle}</a></li>  
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;