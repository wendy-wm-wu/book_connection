import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    // this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // handleSearch(title) {
  //   //handles searches to the API 
  // }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <label for="book-search">Search books: </label>
        <input type="search" id="book-search" placeholder="Search..." onChange={this.handleChange} ></input>
        <button>Submit</button>
      </div>
    );
  }
}

export default Search;
