import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import OwlProfile from './OwlProfile';

class OwlPreview extends Component {
    render() {
        return (
            <Fragment className="owl-preview">
                <Link to={this.props.barnOwl} className="profile-preview">
                    <span className="profile-preview-name">{this.props.name}</span>
                    <img src={this.props.image} alt="owl" className="owl-img"/>

                    <div className="feather-wrapper">
                        <i className="fas fa-feather-alt"/>

                        <i className="fas fa-feather-alt"/>
                        <i className="fas fa-feather-alt"/>
                    </div>

                </Link>

                <Link to={this.props.barredOwl} className="profile-preview">
                    <span className="profile-preview-name">{this.props.name}</span>
                    <img src={this.props.image} alt="owl" className="owl-img"/>

                    <div className="feather-wrapper">
                        <i className="fas fa-feather-alt"/>
                        <i className="fas fa-feather-alt"/>
                        <i className="fas fa-feather-alt"/>
                    </div>

                </Link>

            </Fragment>

        )
    };
}

export default OwlPreview;