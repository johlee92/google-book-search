import React, {Component} from 'react';
import './resultsList.css';

class ResultsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let results = this.props.listOfBooks.map((book) => {
      return <div>
        <h1>{book.volumeInfo.title}</h1>
        <h3>{book.volumeInfo.description}</h3>
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book image"/>
      </div> 
    });

    return (
        <div className='ResultsList'>
          {results}
        </div>
    );
  }
}

export default ResultsList;