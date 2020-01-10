import React, { Component } from 'react';
import NavImage from './NavImage/NavImage'
import './Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLandingContainer: true,
            showNavContainer: false
        }
    }

    hideLanding = () => {
        this.setState({ showLandingContainer: false });
    }

    render() {
        let navLink = 'https://www.google.com/maps/search/?api=1&query=' + this.props.targetLat + ',' + this.props.targetLng
        if (this.props.targetLat) {
            let rating = [];
            for (let i = 0; i < 5; i++) {
                if (i < this.props.targetRating) {
                    rating.push(
                        // <img src="./res/star.png" alt="*" height="30" width="30" key={Math.random()}></img>
                        <span>*</span>
                    )
                }
            }
            return (

                this.props.showPictureBox && <div className="Nav_Container">
                    <NavImage
                        lights={this.props}
                    />
                    <li>
                        {rating}
                    </li>
                    <a href={navLink} target="_blank" rel="noopener noreferrer">Directions</a>
                    {/* <button className="Hide_Nav" onClick={this.props.hidePictureBox}>ddddd</button> */}
                    <br></br>
                    <input onClick={this.props.hidePictureBox} type="image" id="Close_Nav_Btn" alt="Login"
                        src="./res/close.png"></input>
                </div>
            )
        } else {
            if (!this.props.targetLat) {
                return (
                    this.state.showLandingContainer && <div className="Landing_Container">
                        {/* <img src="./res/hat.png" alt="A Hat" height="100vh" width="100vw"></img> */}
                        <h1>Powered by Google Maps</h1>
                        <br></br>
                        <h2>...and Pizza Guys</h2>
                        <br></br>
                        <h3>Click on a marker to get directions to christmas lights</h3>
                        {/* <button onClick={this.hideLanding}>landing</button> */}
                        <br></br>
                        <input onClick={this.hideLanding} type="image" id="Close_Landing_Btn" alt="Login"
                        src="./res/close.png"></input>

                    </div>
                )
            }
        }
    }
}

export default Nav;