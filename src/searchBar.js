import React, {Component} from 'react';
import './searchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="search_section">
                <form 
                    className="search_form"
                    onSubmit={e => this.props.handleSubmit(e)}
                >
                    <label htmlFor="search_book">Search:</label>
                    <input type="text" name="book" id="book" placeholder="book" onChange={e => this.props.handleQuery(e.target.value)}/>
                    <button>Search</button> 
                </form>
            </div>
        )
    }
}

export default SearchBar;