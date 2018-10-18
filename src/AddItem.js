import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      newItem:{}
    }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      this.props.addItem(e, this.props.idName);
  }
    

  render() {
    
    var divName = 'add' + this.props.idName;

    return (
      <div className='addItemDiv'>
        <h4>Add {this.props.idName}</h4>
        <form ref='form' onSubmit={ (e) => this.handleSubmit(e) }>
          <div id={divName} ref={divName}>
            <label>Name</label><br />
            <input type='text' ref='id' />
          </div><br />
          <input type='submit' value='Submit' /><br />
        </form>
      </div>
    );
  }

}

export default AddItem;
