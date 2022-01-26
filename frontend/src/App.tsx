import React from 'react';
import './App.css';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import SearchResults from "./pages/search-results";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/search-results">
                    <SearchResults/>
                </Route>
            </div>
        </Router>
    );
}

export default App;