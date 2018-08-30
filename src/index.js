import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Note from './components/note.js'

ReactDOM.render(<Note />, document.getElementById('root'));
registerServiceWorker();
