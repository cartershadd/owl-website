import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from "./layout/navBar";
import About from "./layout/About";
import OwlPreview from "./components/owls/OwlPreview";
import OwlProfile from "./components/owls/OwlProfile";
import SalamanderPreview from './components/salamanders/SalamanderPreview';
import SalamanderProfile from './components/salamanders/SalamanderProfile';
import Search from "./layout/Search";
import FrogProfile from "./components/frogs/FrogProfile";
import FrogPreview from "./components/frogs/FrogPreview";

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
                        <Route exact path='/salamander' component={SalamanderPreview}/>
                        <Route exact path='/salamander/:id' component={SalamanderProfile}/>
                        <Route exact path='/frog' component={FrogPreview}/>
                        <Route exact path='/frog/:id' component={FrogProfile}/>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;
