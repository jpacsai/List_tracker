import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
	    lists: [], // this holds the name of each list
	    items: {} // this property names of this object are the names of the lists; their values are arrays of the items in each list
    };
  }

  /**
   * This function takes the state of an AddList component as its parameter
   * and updates the state of this App component by adding a new entry to the "lists"
   * array and then adding a new property in the "items" object that has the same name
   * as the value put into the "lists" array. It should then re-render this App component.
   */
  handleAddList(s) {

      const newListItem = s.target[0].value;

      let newLists = this.state.lists.slice(0); 
      let newItems = Object.assign({}, this.state.items, { [newListItem]: []});
      newLists.push(newListItem);

      this.setState({
        lists: newLists,
        items: newItems
      })
  }

  /**
   * This function takes the state of an AddItem component as its parameter
   * and updates the state of this App component by adding a new value to the 
   * appropriate array in the "items" property of the state. Keep in mind that
   * the property names of "items" are the names of each list, which is mapped
   * to an array of the items in that list. After updating the "items" part of 
   * the state, this function  should then re-render this App component.
   */
  handleAddItem(s, id) {
    const item = s.target[0].value;
    let newItemsList = this.state.items[id]
    newItemsList.push({ name: item})
    let newItems = Object.assign({}, this.state.items, { [id]: newItemsList });
    console.log(newItems)
    this.setState({
      items: newItems
    })
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)}/>
        </div>
      </div>
    );
  }

}

export default App;
