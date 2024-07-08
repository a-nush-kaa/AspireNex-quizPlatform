import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/create-quiz" component={CreateQuiz} />
          <Route path="/take-quiz/:id" component={TakeQuiz} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
