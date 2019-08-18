import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import styled from 'react-emotion';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MenuContainer from './Redux/AppContainer';
import TutorialContainer from './Components/TutorialContainer';
import tutorialData from './tutorialData';
import tutorialAppReducer from './Redux/AppReducer'

import './style.css';

const AppContainer = styled("div")`
  height: 100%;
`;

const initialState = {
  tutorialList: tutorialData.tutorialList,
  currentCategory: ''
};
const store = createStore(tutorialAppReducer, initialState);

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={ props => <MenuContainer category='' />} />
            <Route path="/react-fundamentals" render={ props => <MenuContainer  category='react_fundamental_tutorial' />} />
            <Route path="/redux" render={ props => <MenuContainer category='redux_tutorial'/>} />
            <Route path="/tutorial/:id" render={ props => <TutorialContainer match={props.match} history={props.history}/> } />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  </Provider>
);

render(<App />, document.getElementById('root'));
