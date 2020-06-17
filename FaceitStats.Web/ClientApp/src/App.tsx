import React from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import Search from './components/SearchPage/Search';
import StatsPage from './components/StatsPage/StatsPage';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Search} />
                <Route exact path='/stats/:player' component={StatsPage} />
            </Switch>
        </Layout>
    );
}

export default App;
