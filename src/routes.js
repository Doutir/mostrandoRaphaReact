import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import AnimeQuotes from './pages/AnimeQuote';

// import { Container } from './styles';

function Routes() {
  return(
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/anime/:animeQueOUserDigitou' component={AnimeQuotes}/>
    </Switch>
  )
}

export default Routes;