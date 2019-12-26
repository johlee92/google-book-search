import React, {Component} from 'react';
import SearchBar from './searchBar';
import './App.css';
import ResultsList from './resultsList';
import apiKey from './API_KEY';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: '',
      error: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(search) {
    this.setState({
      query: search
    })
  }

  handleSearch(e)  {
    e.preventDefault();

    function formatQueryParams(params) {
      const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      return queryItems.join('&');
    }
    
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const searchUrl = 'https://www.googleapis.com/books/v1/volumes'
    
    const params = {
        q: this.state.query,
        key: apiKey.key
    };

    const queryString = formatQueryParams(params)
    const url = searchUrl + '?' + queryString;

    fetch(proxyurl + url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          books: data.items
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
        console.log(err.message);
      });
  }

  render() {
    return (
      <main className='App'>
        <div className='page_header'>
          <h1>Google Book Search</h1>
        </div>
        <SearchBar
          handleSubmit={this.handleSearch}
          handleQuery={this.handleQuery}
        />
        <ResultsList 
          listOfBooks={this.state.books}
        />
      </main>
    );
  }
}

export default App;