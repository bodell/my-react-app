import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import '../node_modules/bootstrap-2.3.2/css/bootstrap.css';
import 'bootstrap-2.3.2/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
