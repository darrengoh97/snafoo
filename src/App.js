import React from 'react';
import useSWR from 'swr';

import Header from './components/header';
import Footer from './components/footer';

import Home from './sections/home';
import Stock from './sections/stock';
import Voting from './sections/voting';
import SignUp from './sections/signUp';

import CONSTANTS from './constants';

const fetcher = url => fetch(url, {
    method: 'get',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Authorization': CONSTANTS.TOKEN,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
}).then(r =>
    r.json()
).catch (error =>
    console.error(error)
)

function App() {
  const { data: snacks } = useSWR(CONSTANTS.GET_SNACKS_API, fetcher);

  return (
      <div className="site">
        <Header />
        <div className="site-bd">
          <Home />
          <Stock snacks={snacks} />
          <Voting snacks={snacks} />
          <SignUp />
        </div>
        <Footer />
      </div>
  );
}

export default App;
