import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
      this.state = { color: 'black' };
    }

    handleClick() {
      const newColor = this.state.color === 'black' ? 'gray' : 'black';

      this.setState({
        color: newColor
      })
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
      <span onClick={ () => this.handleClick() } style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

