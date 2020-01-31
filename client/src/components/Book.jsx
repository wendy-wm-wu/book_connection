import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const Description = styled.div`
  color: #282c37;
`;

const Wrapper = styled.section`
  padding: 2em;
  max-width: 600px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
`;

const ReadMore = styled.span`
  color: #2b90d9;
  font-size: 13px;
`;

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    }
    this.expandText = this.expandText.bind(this);
  }

  expandText() {
    this.setState({
      expanded: true,
    });
  }

  render() {
    let expandedDescription = <Description>{this.props.description}</Description>;
    if (this.props.description) {
      if (this.props.description.length > 100 && this.props.description.length) {
        expandedDescription = (
          <span>
            <span>
              {this.props.description.slice(0, 100)} ...
            </span>
              <ReadMore onClick={this.expandText}>Read more</ReadMore>
          </span>
        );
      }
    }
    if (this.state.expanded) {
      expandedDescription = <Description>{this.props.description}</Description>
    }
    const { title, author, description, image } = this.props.book;


    return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ width: '150px', height: '200px', marginLeft: 'auto', marginRight: 'auto' }} src={`${this.props.image}`} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.author}</Card.Subtitle>
          <Card.Text>{expandedDescription}</Card.Text>
          <Button variant="primary" onClick={() => this.props.saveBook(this.props.book)}>Save Book</Button>
        </Card.Body>
      </Card>
    </div>
    );
  }
}


export default Book;
