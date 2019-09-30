import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  font: inherit;
  width: 20%;
  height: 2.5%
  text-align: center;
  top: 50%;
`;

const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid black;
  border-radius: 3px;
`;

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
        <Input type="search" id="book-search" value={this.state.term} onChange={this.handleChange} />
        <Button onClick={this.search.bind(this)}>Search Books</Button>
      </div>
    )
  }
}

export default Search;
