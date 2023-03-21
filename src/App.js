import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Mission from "./Pages/Mission";
import ScrollToTopRoute from "./ScrollToTopRoute";
import HomeEvent from "./Pages/Home-event";
import Faq from "./Pages/Faq";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
// import NotFound from "./Pages/404";
import { animateScroll } from "react-scroll";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  scrollToEventAbout = () => {
    animateScroll.scrollToComponent(Contact, { offset: 0, duration: 500 });
  };
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={HomeEvent} />
          <ScrollToTopRoute exact={true} path={"/About"} component={About} />
          <ScrollToTopRoute exact={true} path={"/Mission"} component={Mission} />
          <ScrollToTopRoute exact={true} path={"/Faq"} component={Faq} />
          <ScrollToTopRoute exact={true} path={"/SignIn"} component={SignIn} />
          <ScrollToTopRoute exact={true} path={"/SignUp"} component={SignUp} />
          <ScrollToTopRoute exact={true} path={"/Contact"} component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
