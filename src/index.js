import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';


import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import References from './components/References';
import Contact from './components/Contact';

import BaseLayout from './components/BaseLayout';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/references" component={References} />
        <Route path="/contact" component={Contact} />

      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
