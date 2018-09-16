import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Home from './pages/Home';
import QueryDemo from './pages/Query';
import SubscriptionDemo from './pages/Subscription';
import Volution from './pages/Volution';

const App = () => (
  <Router>
    <div>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={Volution} />
      <Route path="/query" component={QueryDemo} />
      <Route path="/subscription" component={SubscriptionDemo} />
    </div>
  </Router>
);
export default App;
