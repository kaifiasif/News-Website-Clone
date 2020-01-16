import React, { Component } from 'react';
import moment from 'moment';


class Home extends Component {
    state = {}
    render() {
        const date = new Date();

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="welcomeTxt"> Welcome to BBC.com</h3>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h3 className="currentDate">
                            {/* <Moment local format='MMMM DD'>{date}</Moment> */}
                            {moment(date).format('dddd DD MMMM')}
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>

                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."></img>

                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 ">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."></img>

                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>



                            {/* <div className="col-md-6">
                                <div className="row">
                                    <h3 className="welcomeTxt"> Welcome to BBC.com</h3>
                                </div>
                            </div> */}
                        </div>


                        <div className="row space20">
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."></img>

                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."></img>

                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>



                            {/* <div className="col-md-6">
                                <div className="row">
                                    <h3 className="welcomeTxt"> Welcome to BBC.com</h3>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Home;