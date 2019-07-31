import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from "./layout/navBar";
import About from "./layout/About";
import OwlPreview from "./owls/OwlPreview";
import OwlProfile from "./owls/OwlProfile";
import Search from "./layout/Search";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <div className="container">
                    <Switch>
                        <Route exact path='/home' component={Search}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/owl' component={OwlPreview}/>
                        <Route exact path='/owl/:id' component={OwlProfile}/>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;
