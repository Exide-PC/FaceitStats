import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Search from './components/SearchPage/Search';

const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Search} />
    </Layout>
  );
}

export default App;
