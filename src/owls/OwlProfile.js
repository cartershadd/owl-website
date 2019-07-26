import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class OwlProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barnOwl: {
                name: 'Barn Owl',
                img: [
                    process.env.PUBLIC_URL + '/images/barn1.jpg',
                    process.env.PUBLIC_URL + '/images/barn2.jpg',
                    process.env.PUBLIC_URL + '/images/barn3.jpg',
                    process.env.PUBLIC_URL + '/images/barn4.jpg',
                    process.env.PUBLIC_URL + '/images/barn5.jpg'
                ],
                about: 'Barn owls are sometimes referred to as the ghost owl',
                facts: 'Hoot hoot!',
            },
            barredOwl: {
                name: 'Barred Owl',
                img: [
                    process.env.PUBLIC_URL + '/images/barred1.jpg',
                    process.env.PUBLIC_URL + '/images/barred2.jpg',
                    process.env.PUBLIC_URL + '/images/barred3.jpg',
                    process.env.PUBLIC_URL + '/images/barred4.jpg',
                    process.env.PUBLIC_URL + '/images/barred5.jpg'
                ],
                about: 'Barred owls look like this!',
                facts: 'Look at this hooter!',
            },
        }
    }

    componentDidMount() {
        const owl = this.setState(this.state);

        axios.get(owl).then(response => response.data)
            .then((data) => {
                this.setState({owl: data});
            });
    }

    render() {
        return (
            <div className="scrolling">


                <div className="scrolling-container">

                    <img className="scrolling-img" src={this.props.img} alt="owl"/>
                    <img className="scrolling-img" src={this.props.img} alt="owl"/>
                    <img className="scrolling-img" src={this.props.img} alt="owl"/>
                    <img className="scrolling-img" src={this.props.img} alt="owl"/>
                    <img className="scrolling-img" src={this.props.img} alt="owl"/>

                    <span className="all-center">
                    <p>{this.props.about}</p>

                    <p>{this.props.facts}</p>


                </span>
                </div>
            </div>
        );

    };
}

export default OwlProfile;