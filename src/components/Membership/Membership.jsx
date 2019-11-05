import React, { Component, Fragment } from 'react';
import Header from "../Header/Header"

class Membership extends Component{

    render() {
        return (
            <Fragment>
              <Header/>
            <div className="container pricing-header px-3 py-3 pt-md-5 pb-md-5 mx-auto text-center">
              <h1 className="display-5 mt-4">Membership</h1>
              <br/>
              <p className="lead">You can simply choose program to fulfill your needs of education</p>
            </div>
            <div className="container">
              <div className="card-deck mb-4 text-center">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">TOEFL</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">500K<small className="text-muted">/2 mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4 ">
                      <li>100 Videos</li>
                      <li>100 Exercise</li>
                      <li>Tips and Tricks</li>
                      <li>24 Hours CS</li>
                    </ul>
                    <button type="button" className="searchcolor1">Get Started</button>
                  </div>
                </div>
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">IELTS</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">500K<small className="text-muted">/2mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>100 Videos</li>
                      <li>100 Exercise</li>
                      <li>Tips and Tricks</li>
                      <li>24 Hours CS</li>
                    </ul>
                    <button type="button" className="searchcolor1">Get started</button>
                  </div>
                </div>
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">GMAT</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">500K<small className="text-muted">/2mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>100 Videos</li>
                      <li>100 Exercise</li>
                      <li>Tips and Tricks</li>
                      <li>24 Hours CS</li>
                    </ul>
                    <button type="button" className="searchcolor1">Get Started</button>
                  </div>
                </div>
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">ALL</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">1.250K<small className="text-muted">/2mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>300 Videos</li>
                      <li>300 Exercise</li>
                      <li>Tips and Tricks</li>
                      <li>24 Hours CS</li>
                    </ul>
                    <button type="button" className="searchcolor1">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
            </Fragment>
        );
      }
    };

export default Membership