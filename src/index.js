'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

// components
import Searchbar from './components/searchbar';

const App = () => {
  return (
    <div>
      <Searchbar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
