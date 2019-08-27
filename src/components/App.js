import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopWords from './containers/words/TopWords';

export default function App() {
  return (
    <Router>
      <Route path="/words/:count" component={TopWords}/>
      <Route exact path="/" component={TopWords} />
    </Router>
  );
}
