import React, { Component } from 'react';
class Comments extends Component {
    constructor(props) {
        super(props);
        this.comments = [
            {
                personName: "Kate Zalewska", 
                designaton:"Product Owner at Growbots",
                image: "assets/image/dp-one.png",
                comments: '"Really love the product! It saves so mmuch time and helps a lot in organizing our feedback. Awesome idea and huge potential."'
            },
            {
                personName: "Kate Zalewska", 
                designaton:"Product Owner at Growbots",
                image: "assets/image/dp-one.png",
                comments: '"Really love the product! It saves so mmuch time and helps a lot in organizing our feedback. Awesome idea and huge potential."'
            },
            {
                personName: "Kate Zalewska", 
                designaton:"Product Owner at Growbots",
                image: "assets/image/dp-one.png",
                comments: '"Really love the product! It saves so mmuch time and helps a lot in organizing our feedback. Awesome idea and huge potential."'
            }
        ]
    }
    render() { 
        return ( 
            <section className="customer-review">
            <div className="container">
                    <div className="col-md-12 customer-head">
                        <h3>Hear it from our customers</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="reviews">
                            <div className="shadow-outer">
                                {
                                    this.comments.map((item)=>
                                        <div className="reviews-cnt reviews-cnt-corners">
                                            <span id="quote"></span>
                                            <p>{item.comments}</p>
                                            <ul>
                                                <li>
                                                    <span className="customer-profile-pic">
                                                        <img src={item.image} alt="profile"/>
                                                    </span>
                                                    <span className="customer-profile-detail">{item.personName}<br/>
                                                        <span id="profile-detail-sub-text">{item.designaton}</span>
                                                    </span>
                                                    <div className="clearfix"></div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Comments;