import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const Name = styled.div`
  color: #2b90d9;
  line-height: 1.4;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.section`
  padding: 2em;
  max-width: 600px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
`;

const Description = styled.div`
  color: #282c37;
`;

const ReadMore = styled.span`
  color: #2b90d9;
  font-size: 13px;
`;

class EventEntry extends Component{
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
    let description = <Description>{this.props.description}</Description>;
    if (this.props.description) {
      if (this.props.description.length > 100) {
        description = (
          <span>
            <span>
              {this.props.description.slice(0, 150)} ...
            </span>
              <ReadMore onClick={this.expandText}>Read more</ReadMore>
          </span>
        );
      }
    }
    if (this.state.expanded) {
      description = <Description>{this.props.description}</Description>
    }
    return (
    <div>
      {/* <Wrapper>
      <Name>{this.props.name}</Name>
      <br />
      <br/>
      <br />
      {description}
      </Wrapper> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ width: '250px', height: '200px', marginLeft: 'auto', marginRight: 'auto' }} src={`${this.props.image}`} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">   
          {`${moment(this.props.start).format('ddd, MMM Do, YYYY, h:mm A')} -
            ${moment(this.props.end).format('ddd, MMM Do, YYYY, h:mm A')}
          `}
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
  }
}


export default EventEntry;
