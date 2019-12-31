import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./layout/navBar";
import About from "./layout/About";
import Search from "./layout/Search";
import AnimalPreview from "./components/animals/AnimalPreview";
import AnimalProfile from './components/animals/AnimalProfile';

function App() {
    return (
        <div className="app">
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Search}/>
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
            </Router>
        </div>
    );
}

export default App;
