import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bulma/css/bulma.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
