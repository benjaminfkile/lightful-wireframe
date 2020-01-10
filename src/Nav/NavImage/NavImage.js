import React, { Component } from 'react';

class NavImage extends Component {

    render() {

            return (
                <div className="Nav_Header">
                    <img src={this.props.lights.picture} alt='loading' height={300} width={450}></img>
                </div>
            )
    }
}

export default NavImage;