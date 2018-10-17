import React, { Component } from 'react';

class AddList extends Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
	    lists: [], // this holds the name of each list
	    items: {} // this property names of this object are the names of the lists; their values are arrays of the items in each list
    };
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      const newListItem = e.target[0].value;

      let newLists = this.state.lists.slice(0); 
      let newItems = Object.assign({}, this.state.items, { [newListItem]: []});

      this.setState({
        lists: newLists,
        items: newItems
      })
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={ (e) => {
          this.handleSubmit(e)
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
