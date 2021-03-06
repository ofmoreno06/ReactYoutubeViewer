import React, { Component } from 'react';

class Searchbar extends Component{
  constructor(props){
    super(props);

    this.state = { term: 'hello'};
  }

  render(){
    return (
      <div>
        <input type="text" value={ this.state.term }
          onChange={ e => this.setState({ term: e.target.value }) }/>
      </div>
    );
  }

}

export default Searchbar;
