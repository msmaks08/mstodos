import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Active from './Active';
import Done from './Done';

function App() {
  return (
    <Router>
      <div className="header">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/active">
              <Active />
            </Route>
            <Route exact path="/done">
              <Done />
            </Route>
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;