// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Foster from './components/Foster';
import Adopt from './components/Adopt';
import HowToHelp from './components/HowToHelp';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '64px' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/adopt" component={Adopt} />
          <Route path="/foster" component={Foster} />
          <Route path="/howToHelp" component={HowToHelp} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
