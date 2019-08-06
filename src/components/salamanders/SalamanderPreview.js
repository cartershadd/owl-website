import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SalamanderPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salamanderList: [
                {
                    id: 1,
                    name: 'Tiger Salamander',
                    img: [
                        process.env.PUBLIC_URL + '/images/tiger1.jpg',
                        process.env.PUBLIC_URL + '/images/tiger2.png',
                        process.env.PUBLIC_URL + '/images/tiger3.jpg',
                        process.env.PUBLIC_URL + '/images/tiger4.jpg',
                        process.env.PUBLIC_URL + '/images/tiger5.jpg'
                    ],
                    about: 'The tiger salamander has stripes and an adorable smile. They can live up to 25 years old!',
                    facts: 'Salamanders are amphibians and undergo metamorphosis like frogs and toads do,' +
                        'although there are some exceptions.'
                },
                {
                    id: 2,
                    name: 'Marbled Salamander',
                    img: [
                        process.env.PUBLIC_URL + '/images/marbled1.jpg',
                        process.env.PUBLIC_URL + '/images/marbled2.jpg',
                        process.env.PUBLIC_URL + '/images/marbled3.jpg',
                        process.env.PUBLIC_URL + '/images/marbled4.jpg',
                        process.env.PUBLIC_URL + '/images/marbled5.jpg'
                    ],
                    about: 'The marbled salamander has beautiful black and white markings that vary from ' +
                        'salamander to salamander.',
                    facts: 'The female marbled salamander will guard her eggs until they hatch.'
                },
                {
                    id: 3,
                    name: 'Slimy Salamander',
                    img: [
                        process.env.PUBLIC_URL + '/images/slimy1.jpg',
                        process.env.PUBLIC_URL + '/images/slimy2.jpg',
                        process.env.PUBLIC_URL + '/images/slimy3.jpg',
                        process.env.PUBLIC_URL + '/images/slimy4.jpg',
                        process.env.PUBLIC_URL + '/images/slimy5.jpg'
                    ],
                    about: 'There are several genetically distinct species of Slimy Salamander' +
                        'in Georgia alone, many of which have subtle physical differences (or none at all).',
                    facts: 'Slimy salamanders lay eggs on land, and once the larvae metamorphose, they resemble the adults.'
                },
                {
                    id: 4,
                    name: 'Red Salamander',
                    img: [
                        process.env.PUBLIC_URL + '/images/red1.jpg',
                        process.env.PUBLIC_URL + '/images/red2.jpg',
                        process.env.PUBLIC_URL + '/images/red3.jpg',
                        process.env.PUBLIC_URL + '/images/red4.jpg',
                        process.env.PUBLIC_URL + '/images/red5.jpg'
                    ],
                    about: 'The red salamander is found throughout the eastern United States, and thankfully they are quite common and so far,' +
                        'their populations remain intact.',
                    facts: 'It takes 2 to 3 years for red salamander larvae to metamorphose.'
                }
            ]
        }
    }

    render() {
        return (
            this.state.salamanderList.map((salamander, index) =>
            <div className="animal-preview">
                <Link to={"/salamander/" + salamander.id} className="profile-preview">
                    <span className="profile-preview-name">{salamander.name}</span>
                    <img src={salamander.img[1]} alt="salamander" className="animal-img"/>

                    <div className="icon-wrapper">
                        <i className="fas fa-leaf"/>
                        <i className="fas fa-leaf"/>
                        <i className="fas fa-leaf"/>

                    </div>

                </Link>
            </div>
        ))
    }
}

export default SalamanderPreview;