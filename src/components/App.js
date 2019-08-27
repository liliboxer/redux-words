import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopWords from './containers/words/TopWords';
import Searchable from './words/Searchable';

export default function App() {
  return (
    <Router>
      <Route path="/words/:count" component={Searchable}/>
      <Route exact path="/" component={TopWords} />
    </Router>
  );
}
