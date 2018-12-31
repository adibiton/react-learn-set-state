import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    const { clicked } = this.state;
    if (clicked) {
      return <h1>Thanks</h1>;
    }
    return (
      <button type="button" onClick={this.handleClick}>
                Click me!
      </button>
    );
  }
}

export default Button