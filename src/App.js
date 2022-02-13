import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <main className="content">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
