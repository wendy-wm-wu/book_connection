import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Name = styled.div`
  color: #2b90d9;
  line-height: 1.4;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
`;

// const Start = styled.div`
//   color: #282c37;
//   font-size: 14px;
//   font-family: 'Open Sans', sans-serif;
// `;

// const End = styled.div`
//   color: #282c37;
//   font-size: 14px;
//   font-family: 'Open Sans', sans-serif;
// `;

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

class Event extends React.Component{
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
      <Wrapper>
      <Name>{this.props.name}</Name>
      <br />
      {`${moment(this.props.start).format('ddd, MMM Do, YYYY, h:mm A')} -
        ${moment(this.props.end).format('ddd, MMM Do, YYYY, h:mm A')}
     `}
      <br/>
      <br />
      {description}
      </Wrapper>
    </div>
    );
  }
}


export default Event;
