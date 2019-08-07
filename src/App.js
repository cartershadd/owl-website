import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from "./layout/navBar";
import About from "./layout/About";
import Search from "./layout/Search";
import AnimalPreview from "./components/animals/AnimalPreview";
import AnimalProfile from './components/animals/AnimalProfile';

function App() {
    return (
        <Router>
            <div className="app">
                <NavBar/>
                <div className="container">
                    <Switch>
                        <Route exact path='/home' component={Search}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/:type' component={AnimalPreview}/>
                        <Route exact path='/:type/:id' component={AnimalProfile}/>
                        <Route exact path='/:type' component={AnimalPreview}/>
                        <Route exact path='/:type/:id' component={AnimalProfile}/>
                        <Route exact path='/:type' component={AnimalPreview}/>
                        <Route exact path='/:type/:id' component={AnimalProfile}/>
                        <Route exact path='/:type' component={AnimalPreview}/>
                        <Route exact path='/:type/:id' component={AnimalProfile}/>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;
