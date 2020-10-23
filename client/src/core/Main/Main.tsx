import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route 
} from 'react-router-dom';
import Home from '../../views/Home/Home';
import Map from '../../views/Map/Map';
import NotFound from '../../views/NotFound/NotFound';

const StyledApp = styled.div`
  background-color: black;
  font-size: 32px;
  color: white;
`;

const Main = () => {
  const [count, setCount] = useState(1);
  return (
    <StyledApp>
      <button onClick={() => {setCount(count + 1)}}>{count}</button>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/map'>Map</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/map'>
              <Map />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </StyledApp>
  );
};

export default Main;
