import React, {Component} from 'react';
import OwlPreview from "../owls/OwlPreview";

class Search extends Component {
    state = {
        text: '',
        owlList: [],
        showNoResults: false,
    };

    Search = () => {
        const searchTerms = this.setState(this.state.text);
    };



    onSubmit = (e) => {
        e.preventDefault();
        this.Search(this.state.text);
    };


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search..."
                        className="search-bar"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="search-btn"
                    />
                </form>
                <div className="search-results">
                    {this.state.owlList.filter(owl => owl.name.indexOf(this.state.text) !== -1).map((value, index) => {
                        return <OwlPreview key={index} name={value.name}/>
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