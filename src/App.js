import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from "./layout/navBar";

import OwlPreview from "./owls/OwlPreview";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <div className="container">
                    <OwlPreview/>
                    <Switch>
                        <Route exact path={'/'}/>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;
