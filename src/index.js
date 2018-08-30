import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Board from './components/board'

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
