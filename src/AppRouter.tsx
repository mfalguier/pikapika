import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import {NotFound, PokeDetail, PokeHome} from './components';

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Router>
        <Switch>
          <Route exact={true} path="/" component={PokeHome} />
          <Route exact={true} path="/pokemon/:name" component={PokeDetail} />
          <Route component={NotFound} />
        </Switch>
        </Router>
    </div>
    );
  }
}

export default App;
