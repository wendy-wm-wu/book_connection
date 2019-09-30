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

const InputCity = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  font: inherit;
  width: 20%;
  height: 2.5%
  text-align: center;
  top: 50%;
`;

const ButtonCity = styled.button`
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
      city: '',
    }
    // this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  // handleSearch(title) {
  //   //handles searches to the API 
  // }

  handleChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  handleCityChange(event) {
    this.setState({
      city: event.target.value,
    });
  }

  searchBooks() {
    this.props.onSearch(this.state.term);
  }

  searchCity() {
    this.props.onSearchEvents(this.state.city);
  }

  render() {
    return (
      <div>
        <Input type="search" id="book-search" value={this.state.term} onChange={this.handleChange} />
        <Button onClick={this.searchBooks.bind(this)}>Search Books</Button>
        <InputCity type="search" id="city-search" value={this.state.city} onChange={this.handleCityChange} />
        <ButtonCity onClick={this.searchCity.bind(this)}>Search City</ButtonCity>
      </div>
    )
  }
}

export default Search;
