import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
    // this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // handleSearch(title) {
  //   //handles searches to the API 
  // }

  handleChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div>
        <label for="book-search">Search books: </label>
        <input type="search" id="book-search" value={this.state.term} onChange={this.handleChange} ></input>
        <button onClick={this.search.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default Search;
