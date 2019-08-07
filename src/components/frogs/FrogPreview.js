import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FrogPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frogList: [
                {
                    id: 1,
                    name: 'American Bullfrog',
                    img: [
                        process.env.PUBLIC_URL + '/images/bull1.jpg',
                        process.env.PUBLIC_URL + '/images/bull2.jpg',
                        process.env.PUBLIC_URL + '/images/bull3.jpg',
                        process.env.PUBLIC_URL + '/images/bull4.jpg',
                        process.env.PUBLIC_URL + '/images/bull5.jpg'
                    ],
                    about: 'The American bullfrog is found often in both rural and urban settings. It does' +
                        'not seem uncomfortable living among humans.',
                    facts: 'Bullfrogs often share space with fish, which is unusual compared to other frogs, who compete ' +
                        'for space with fish often.'
                },
                {
                    id: 2,
                    name: 'American Toad',
                    img: [
                        process.env.PUBLIC_URL + '/images/atoad1.jpg',
                        process.env.PUBLIC_URL + '/images/atoad2.jpg',
                        process.env.PUBLIC_URL + '/images/atoad3.jpg',
                        process.env.PUBLIC_URL + '/images/atoad4.jpg',
                        process.env.PUBLIC_URL + '/images/atoad5.jpg'
                    ],
                    about: 'Fun fact - frogs and toads are basically the same thing. There is of course only one family of true toads, but to call them frogs is not technically incorrect.',
                    facts: 'The American toad may often be mistaken for other toads - oftentimes, if you count the warts, you can spot the difference.' +
                        'The call of the American toad sounds like a long musical trill, which is distinct from other toads.'
                },
                {
                    id: 3,
                    name: 'Eastern Narrowmouth Toad',
                    img: [
                        process.env.PUBLIC_URL + '/images/narrow1.png',
                        process.env.PUBLIC_URL + '/images/narrow2.jpg',
                        process.env.PUBLIC_URL + '/images/narrow3.jpg',
                        process.env.PUBLIC_URL + '/images/narrow4.jpg',
                        process.env.PUBLIC_URL + '/images/narrow5.jpg'
                    ],
                    about: 'The Eastern Narrowmouth toad has a call similar to a bleating sheep. While not common, the female of the species can lay up to 700 eggs in a breeding event.',
                    facts: 'They also have an adorable narrow little face!'
                },
                {
                    id: 4,
                    name: 'Spring Peeper',
                    img: [
                        process.env.PUBLIC_URL + '/images/peep1.jpg',
                        process.env.PUBLIC_URL + '/images/peep2.jpg',
                        process.env.PUBLIC_URL + '/images/peep3.jpg',
                        process.env.PUBLIC_URL + '/images/peep4.jpg',
                        process.env.PUBLIC_URL + '/images/peep5.jpg'
                    ],
                    about: 'The call of the spring peeper is quite deafening when many of them congregate!',
                    facts: 'They have a distinctive cross on their back, which is where they get their scientific name Pseudacris crucifer.'
                }
            ]
        }
    }

    render() {
        return (
            this.state.frogList.map((frog, index) =>
            <div className="animal-preview">
                <Link to={"/frog/" + frog.id} className="profile-preview">
                    <span className="profile-preview-name">{frog.name}</span>
                    <img src={frog.img[1]} alt="frog" className="animal-img"/>

                    <div className="icon-wrapper">
                        <i className="fas fa-frog"/>
                        <i className="fas fa-frog"/>
                        <i className="fas fa-frog"/>
                    </div>
                </Link>
            </div>
        ))
    }
}

export default FrogPreview;