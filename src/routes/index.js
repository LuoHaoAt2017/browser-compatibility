import React from 'react';
import Chapter1 from '@/pages/chapter01';
import Chapter2 from '@/pages/chapter02';
import Chapter3 from '@/pages/chapter03';
import '@/assets/scss/app.scss';
import {
    Link, HashRouter as Router, Switch, Route, Redirect
} from "react-router-dom";

function App() {
    return (
        <div className='app'>
            <Router>
                <div className='navigator'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/chapter1">样式兼容性</Link>
                            </li>
                            <li>
                                <Link to="/chapter2">交互兼容性</Link>
                            </li>
                            <li>
                                <Link to="/chapter3">浏览器hack</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='container'>
                    <Switch>
                        <Route path="/chapter1">
                            <Chapter1 />
                        </Route>
                        <Route path="/chapter2">
                            <Chapter2 />
                        </Route>
                        <Route path="/chapter3">
                            <Chapter3 />
                        </Route>
                        <Redirect from="/" to="/chapter1" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;