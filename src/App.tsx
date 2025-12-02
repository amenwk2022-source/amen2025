import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Cases from './pages/Cases';
import Sessions from './pages/Sessions';
import Tasks from './pages/Tasks';
import Finance from './pages/Finance';
import Settings from './pages/Settings';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <nav className="sidebar">
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/clients">Clients</Link></li>
                        <li><Link to="/cases">Cases</Link></li>
                        <li><Link to="/sessions">Sessions</Link></li>
                        <li><Link to="/tasks">Tasks</Link></li>
                        <li><Link to="/finance">Finance</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/clients" component={Clients} />
                        <Route path="/cases" component={Cases} />
                        <Route path="/sessions" component={Sessions} />
                        <Route path="/tasks" component={Tasks} />
                        <Route path="/finance" component={Finance} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;