import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail"
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import NavbarHome from './components/NavbarHome'
import TvPage from './components/TvPage'
import TvDetail from './components/TvDetail'

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
         <NavbarHome/>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
          <Route exact path="/tv">
              <TvPage />
            </Route>
            <Route exact path="/tvdetail/:id">
              <TvDetail />
            </Route>
          <Route exact path="/movdetail/:id">
              <MovieDetail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
