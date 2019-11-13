import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      city: '',
    }
  }

  render() {
    const { bookQuery } = this.props;
    const { input } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search..."
            aria-describedby="basic-addon1"
            onChange={(event) => {
              this.setState({
                input: event.target.value
              });
            }}
          />
        </InputGroup>
        <Button variant="primary" onClick={() => bookQuery(input)}>Search</Button>
      </div>
    );
  }
}

export default Search;
