import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BookSpectacle from "./book/BookSpectacle";

ReactDOM.render(<BookSpectacle />, document.getElementById('root'));

serviceWorker.unregister();
