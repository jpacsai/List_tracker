import React, { Component } from 'react';

class AddList extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!  
  }

  render() {
    
    const { addList } = this.props;

    return (
      <div id="addListDiv">
        <form onSubmit={ (e) => {
          this.handleSubmit(e);
          addList(e);
          //this.props.addList(e)
        }}>
          <div id='addList'>
            <label>What will be on your next list?&nbsp;
              <input type='text' ref='id' id='newID'></input>
            </label>
          </div><br />
          <input type='submit' value='Create List' />
        </form>
      </div>
    );
  }
}

export default AddList;
