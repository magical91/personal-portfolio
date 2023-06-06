// import "./Hero2.css";

import React, { Component } from 'react';

class Banner2 extends Component {
    render() {
        return (
            <div className="banner-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Banner2