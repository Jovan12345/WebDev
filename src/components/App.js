import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import WorldChampionsList from './WorldChampionsList'
import YearlyWinnersList from './YearlyWinnersList'
import YearsList from './YearsList';
import Header from './Header'
import history from '../history'

const App = () => {
    return (
        <div className='mainContainer'>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={YearsList} />
                        <Route path='/worldchamps' exact component={WorldChampionsList} />
                        <Route path='/winners/:year' exact component={YearlyWinnersList} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;