import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Search extends Component {
    state = {
        text: '',
        animalList: [
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
            },
            {
                id: 5,
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
                id: 6,
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
                id: 7,
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
                id: 8,
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
        ],
        filteredAnimalList: [],
        showNoResults: false,
    };


    Search = (searchTerm) => {
        let filteredAnimalList = this.state.animalList.filter(animal =>
            animal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        this.setState({filteredAnimalList: filteredAnimalList});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.Search(this.refs.searchForm.value);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        id="searchForm"
                        ref="searchForm"
                        type="text"
                        name="text"
                        placeholder="Search..."
                        className="search-bar"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="search-btn"
                    />
                </form>
                <div className="search-results">
                    {this.state.filteredAnimalList.map((animal, index) => {
                        return <div key={index} className="animal-preview">
                            <Link to={"/animal/" + animal.id} className="profile-preview">
                                <span className="profile-preview-name">{animal.name}</span>
                                <img src={animal.img[1]} alt="animal" className="animal-img"/>

                                <div className="icon-wrapper"></div>
                            </Link>
                        </div>
                    })}
                    {this.showNoResults
                        ? <div className="profile-preview">No results.</div>
                        : <div/>
                    }
                </div>
            </div>
        );
    }
}

export default Search;