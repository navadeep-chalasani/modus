import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    render(){
        return(
            <div className=" landing_page container-fluid">
                <div className="row">
                    <div className="col-xs-8 col-xs-push-3 modus_green  ">
                        <img className = "img-responsive img-size" src="../images/modus_green.png"/>
                    </div>
                </div>
                <div className="row welcome-message">
                    <h3 className="col-xs-10 col-xs-push-1 col-xs-pull-1">
                        Welcome aboard!
                    </h3>
                    <p className="col-xs-8 col-xs-push-2 col-xs-pull-2">
                        A one of a kind platform to discover, create manage blogs
                    </p>
                </div>
                <div className="row start-button">
                    <Link className="col-xs-10 col-xs-push-1 col-xs-pull-1 btn btn-primary" to="/newslist">
                        Start your journey
                    </Link>
                </div>

            </div>
        );
    }
}
