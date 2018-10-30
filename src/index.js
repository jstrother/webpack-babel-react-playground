import React from 'react';
import ReactDOM from 'react-dom';

import './myStyles.scss';

const App = () => {
  return (
    <div className='app'>
      <p>
        We are a most promising species, Mr. Spock, as preadators go. Did you know that? I frequently have my doubts. I don't. Not anymore. And maybe in a thousand years or so, we will be able to prove it.
      </p>
      <p>-Captain Kirk</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));