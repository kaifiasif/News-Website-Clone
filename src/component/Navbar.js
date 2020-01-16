
import React, { Component } from 'react';
import '../component/Navbar.css';
class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link sideArrow" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link sideArrow" href="#">News</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link sideArrow" href="#">Sports</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link sideArrow" href="#">Reel</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link sideArrow" href="#">Worklife</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link sideArrow" href="#">Travel</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link sideArrow" href="#">Future</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link sideArrow" href="#">Culture</a>
                            </li>
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Music</a>
                                    <a className="dropdown-item" href="#">TV</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Weather</a>
                                </div>
                            </li>

                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;