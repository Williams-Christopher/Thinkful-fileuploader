import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


//index.js:1375 Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. 
//This will render a read-only field. If the field should be mutable use `defaultValue`. 
//Otherwise, set either `onChange` or `readOnly`.

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/>
        <input placeholder="Search term" value={this.props.searchTerm} />
      </div>   
    );
  }
}

export default SearchBox;