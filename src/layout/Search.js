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
                type: 'owl'
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
                type: 'owl'
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
                type: 'owl'
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
                type: 'owl'
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
                    'although there are some exceptions.',
                type: 'salamander'
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
                facts: 'The female marbled salamander will guard her eggs until they hatch.',
                type: 'salamander'
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
                facts: 'Slimy salamanders lay eggs on land, and once the larvae metamorphose, they resemble the adults.',
                type: 'salamander'
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
                facts: 'It takes 2 to 3 years for red salamander larvae to metamorphose.',
                type: 'salamander'
            },
            {
                id: 9,
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
                    'for space with fish often.',
                type: 'frog'
            },
            {
                id: 10,
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
                    'The call of the American toad sounds like a long musical trill, which is distinct from other toads.',
                type: 'frog'
            },
            {
                id: 11,
                name: 'Eastern Narrowmouth Toad',
                img: [
                    process.env.PUBLIC_URL + '/images/narrow1.png',
                    process.env.PUBLIC_URL + '/images/narrow2.jpg',
                    process.env.PUBLIC_URL + '/images/narrow3.jpg',
                    process.env.PUBLIC_URL + '/images/narrow4.jpg',
                    process.env.PUBLIC_URL + '/images/narrow5.jpg'
                ],
                about: 'The Eastern Narrowmouth toad has a call similar to a bleating sheep. While not common, the female of the species can lay up to 700 eggs in a breeding event/',
                facts: 'They also have an adorable narrow little face!',
                type: 'frog'
            },
            {
                id: 12,
                name: 'Spring Peeper',
                img: [
                    process.env.PUBLIC_URL + '/images/peep1.jpg',
                    process.env.PUBLIC_URL + '/images/peep2.jpg',
                    process.env.PUBLIC_URL + '/images/peep3.jpg',
                    process.env.PUBLIC_URL + '/images/peep4.jpg',
                    process.env.PUBLIC_URL + '/images/peep5.jpg'
                ],
                about: 'The call of the spring peeper is quite deafening when many of them congregate!',
                facts: 'They have a distinctive cross on their back, which is where they get their scientific name Pseudacris crucifer.',
                type: 'frog'
            },
            {
                id: 13,
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
                    'The red fox is quite beautiful and harmless to humans, but must remain wild.',
                type: 'fox'
            },
            {
                id: 14,
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
                facts: 'Arctic foxes are mostly monogamous and both parents care for the young.',
                type: 'fox'
            },
            {
                id: 15,
                name: 'Fennec Fox',
                img: [
                    process.env.PUBLIC_URL + '/images/fennec1.jpg',
                    process.env.PUBLIC_URL + '/images/fennec2.jpg',
                    process.env.PUBLIC_URL + '/images/fennec3.jpg',
                    process.env.PUBLIC_URL + '/images/fennec4.jpg',
                    process.env.PUBLIC_URL + '/images/fennec5.jpg'
                ],
                about: 'The fennec fox is found in desert climates and its large ears help keep it from overheating.',
                facts: 'The fennec fox is small but has very loud vocalizations. It eats mostly insects and small birds.',
                type: 'fox'
            },
            {
                id: 16,
                name: 'Bat-eared Fox',
                img: [
                    process.env.PUBLIC_URL + '/images/bfox1.jpg',
                    process.env.PUBLIC_URL + '/images/bfox2.jpg',
                    process.env.PUBLIC_URL + '/images/bfox3.jpg',
                    process.env.PUBLIC_URL + '/images/bfox4.jpg',
                    process.env.PUBLIC_URL + '/images/bfox5.jpg'
                ],
                about: 'The bat-eared fox lives in the African Savannah. The large ears help them hunt for insects and aid in thermoregulation.',
                facts: 'Due to its insectivorous diet, the bat-eared fox has very unusual teeth compared to other fox species.',
                type: 'fox'
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
                            <Link to={`/${animal.type}/${animal.id}`} className="profile-preview">
                                <span className="profile-preview-name">{animal.name}</span>
                                <img src={animal.img[1]} alt="animal" className="animal-img"/>

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