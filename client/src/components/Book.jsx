import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: #2b90d9;
  line-height: 1.4;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
`;

const Author = styled.div`
  color: #282c37;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
`;

const Description = styled.div`
  color: #282c37;
`;

const Image = styled.img`
  display: block;
  margin: left;
  padding: 2em;
  width: 200px;
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px);
  
`;

const Wrapper = styled.section`
  padding: 2em;
  max-width: 500px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
`;

const ReadMore = styled.span`
  color: #2b90d9;
  font-size: 13px;
`;

class Book extends React.Component{
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
    if (this.props.description.length > 100) {
      description = (
        <span>
          <span>
            {this.props.description.slice(0, 200)} ...
          </span>
            <ReadMore onClick={this.expandText}>Read more</ReadMore>
        </span>
      );
    }
    if (this.state.expanded) {
      description = <Description>{this.props.description}</Description>
    }

    return (
    <div>
      <Image src={`${this.props.image}`} />
      <Wrapper>
      <Title>{this.props.title}</Title>
      <Author>By {this.props.author}</Author>
      <br/>
      {description}
      </Wrapper>
    </div>
    );
  }
}


export default Book;
