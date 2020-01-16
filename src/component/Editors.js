import React, { Component } from 'react';
import axios from 'axios'
class Editors extends Component {
    state = {
        imgURL: ''

    }
    componentDidMount() {
        this.getNewsData()
    }

    getNewsData = () => {
        const self = this;
        const axios = require('axios');
        // API 9bba2b3d4dff4b66bac166aad57b4a4c

        // Make a request for a user with a given ID
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-16&sortBy=publishedAt&apiKey=9bba2b3d4dff4b66bac166aad57b4a4c')
            .then(function (response) {

                // handle success
                console.log(response);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    render() {
        let apiResopnse = this.getNewsData();
        console.log("API Response", apiResopnse)
        return (
            <div className="editBG space30 padTop20">
                <div className="container space20 ">
                    <span className="editHeading"> Editor's Picks </span>
                    <div className="col-md-12">
                        <div className="row space20" >
                            <div className="col-md-9">
                                <div className="card">
                                    <img src="{this.getNewsData.urlToImage}" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div class="card-header latestNewsHeading">
                                        LATEST BUSINESS NEWS</div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                            </div>




                        </div>
                        <div className="row space10" >
                            <div className="col-sm-3">
                                <div className="card">
                                    <img src="{this.getNewsData.urlToImage}" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."></img>

                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."></img>

                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Editors;