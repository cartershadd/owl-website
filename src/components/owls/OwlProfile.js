import React, {Component} from 'react';
import axios from 'axios';

class OwlProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owlList: [
                {
                    id: 1,
                    name: 'Barn Owl',
                    img: [
                        process.env.PUBLIC_URL + '/images/barn1.jpg',
                        process.env.PUBLIC_URL + '/images/barn2.jpg',
                        process.env.PUBLIC_URL + '/images/barn3.jpg',
                        process.env.PUBLIC_URL + '/images/barn4.jpg',
                        process.env.PUBLIC_URL + '/images/barn5.jpg'
                    ],
                    about: 'Barn owls are sometimes referred to as the ghost owl.',
                    facts: 'They have a cry that sounds like a horrifying shriek. As the name suggests, they do indeed love to roost in barns and abandoned buildings.',
                },
                {
                    id: 2,
                    name: 'Barred Owl',
                    img: [
                        process.env.PUBLIC_URL + '/images/barred1.jpg',
                        process.env.PUBLIC_URL + '/images/barred2.jpg',
                        process.env.PUBLIC_URL + '/images/barred3.jpg',
                        process.env.PUBLIC_URL + '/images/barred4.jpg',
                        process.env.PUBLIC_URL + '/images/barred5.jpg'
                    ],
                    about: 'Barred owls do not migrate.',
                    facts: 'This owl has a call that sounds like the phrase, "Who cooks for you?" This often sounds like the barking of a large dog from a distance.',
                },
                {
                    id: 3,
                    name: 'Snowy Owl',
                    img: [
                        process.env.PUBLIC_URL + '/images/snowy1.jpg',
                        process.env.PUBLIC_URL + '/images/snowy2.jpg',
                        process.env.PUBLIC_URL + '/images/snowy3.jpg',
                        process.env.PUBLIC_URL + '/images/snowy4.jpg',
                        process.env.PUBLIC_URL + '/images/snowy5.jpg'
                    ],
                    about: 'Snowy owls are amazing and beautiful!',
                    facts: 'They live in the colder regions of North America. Hedwig from the Harry Potter series is a snowy owl.',
                },
                {
                    id: 4,
                    name: 'Eastern Screech Owl',
                    img: [
                        process.env.PUBLIC_URL + '/images/screech1.jpg',
                        process.env.PUBLIC_URL + '/images/screech2.jpg',
                        process.env.PUBLIC_URL + '/images/screech3.jpg',
                        process.env.PUBLIC_URL + '/images/screech4.jpg',
                        process.env.PUBLIC_URL + '/images/screech5.jpg'
                    ],
                    about: 'The eastern screech owl looks like a mini version of the great horned owl.',
                    facts: 'The eastern screech owl can be grey or red. They are approximately the same size as a robin.',
                }
            ]
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
            this.state.owlList.filter(owl => owl.id.toString() === this.props.match.params.id).map((owl, index) =>
                <div className="scrolling">
                    <div className="scrolling-container">

                        <img className="scrolling-img" src={owl.img[0]} alt="owl"/>
                        <img className="scrolling-img" src={owl.img[1]} alt="owl"/>
                        <img className="scrolling-img" src={owl.img[2]} alt="owl"/>
                        <img className="scrolling-img" src={owl.img[3]} alt="owl"/>
                        <img className="scrolling-img" src={owl.img[4]} alt="owl"/>

                    </div>
                    <p className="about">{owl.about}</p>
                    <p className="facts">{owl.facts}</p>
                </div>
            ))
    }
}


export default OwlProfile;