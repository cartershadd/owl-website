import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FoxPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foxList: [
                {
                    id: 1,
                    name: 'Red Fox',
                    img: [
                        process.env.PUBLIC_URL + '/images/rfox1.jpg',
                        process.env.PUBLIC_URL + '/images/rfox2.jpg',
                        process.env.PUBLIC_URL + '/images/rfox3.jpg',
                        process.env.PUBLIC_URL + '/images/rfox4.jpg',
                        process.env.PUBLIC_URL + '/images/rfox5.jpg'
                    ],
                    about: 'The red fox is the largest of the true foxes and is found throughout North America and the entire world.',
                    facts: 'While foxes can live quite well among humans, many people want to keep them as pets and are terribly unprepared to do so.' +
                        'The red fox is quite beautiful and harmless to humans, but must remain wild.'
                },
                {
                    id: 2,
                    name: 'Arctic Fox',
                    img: [
                        process.env.PUBLIC_URL + '/images/arctic1.jpg',
                        process.env.PUBLIC_URL + '/images/arctic2.jpg',
                        process.env.PUBLIC_URL + '/images/arctic3.jpg',
                        process.env.PUBLIC_URL + '/images/arctic4.jpg',
                        process.env.PUBLIC_URL + '/images/arctic5.jpg'
                    ],
                    about: 'The Arctic fox as two morphs - white and blue. White Arctic foxes will turn white in winter and be brown- gray in summer. A blue morph Arctic fox is blue to dark gray all year around - however, over ' +
                        '99% of the population is the white morph.',
                    facts: 'Arctic foxes are mostly monogamous and both parents care for the young.'
                },
                {
                    id: 3,
                    name: 'Fennec Fox',
                    img: [
                        process.env.PUBLIC_URL + '/images/fennec1.jpg',
                        process.env.PUBLIC_URL + '/images/fennec2.jpg',
                        process.env.PUBLIC_URL + '/images/fennec3.jpg',
                        process.env.PUBLIC_URL + '/images/fennec4.jpg',
                        process.env.PUBLIC_URL + '/images/fennec5.jpg'
                    ],
                    about: 'The fennec fox is found in desert climates and its large ears help keep it from overheating.',
                    facts: 'The fennec fox is small but has very loud vocalizations. It eats mostly insects and small birds.'
                },
                {
                    id: 4,
                    name: 'Bat-eared Fox',
                    img: [
                        process.env.PUBLIC_URL + '/images/bfox1.jpg',
                        process.env.PUBLIC_URL + '/images/bfox2.jpg',
                        process.env.PUBLIC_URL + '/images/bfox3.jpg',
                        process.env.PUBLIC_URL + '/images/bfox4.jpg',
                        process.env.PUBLIC_URL + '/images/bfox5.jpg'
                    ],
                    about: 'The bat-eared fox lives in the African Savannah. The large ears help them hunt for insects and aid in thermoregulation.',
                    facts: 'Due to its insectivorous diet, the bat-eared fox has very unusual teeth compared to other fox species.'
                }
            ]
        }
    }

    render() {
        return (
            this.state.foxList.map((fox, index) =>
            <div className="animal-preview">
                <Link to={"/fox/" + fox.id} className="profile-preview">
                    <span className="profile-preview-name">{fox.name}</span>
                    <img src={fox.img[1]} alt="fox" className="animal-img"/>

                    <div className="icon-wrapper">
                        <i className="fas fa-paw"/>
                        <i className="fas fa-paw"/>
                        <i className="fas fa-paw"/>
                    </div>
                </Link>
            </div>
        ))
    }
}

export default FoxPreview;