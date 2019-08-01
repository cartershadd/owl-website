import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Search extends Component {
    state = {
        text: '',
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
        ],
        filteredOwlList: [],
        showNoResults: false,
    };


    Search = (searchTerm) => {
        let filteredOwlList = this.state.owlList.filter(owl =>
            owl.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        this.setState({filteredOwlList: filteredOwlList});
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
                    {this.state.filteredOwlList.map((owl, index) => {
                        return <div key={index} className="owl-preview">
                            <Link to={"/owl/" + owl.id} className="profile-preview">
                                <span className="profile-preview-name">{owl.name}</span>
                                <img src={owl.img[1]} alt="owl" className="owl-img"/>

                                <div className="feather-wrapper">
                                    <i className="fas fa-feather-alt"/>
                                    <i className="fas fa-feather-alt"/>
                                    <i className="fas fa-feather-alt"/>
                                </div>
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