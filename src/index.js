import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import authsSignupReducer from './store/reducers/authSignup';
import authsSigninReducer from './store/reducers/authSignin';
import formSubmitReducer from './store/reducers/formSubmit';
import myChannelReducer from './store/reducers/myChannel';
import singleChannelReducer from './store/reducers/singleChannel';
import singleCategoryReducer from './store/reducers/singleCategory';
import singleVideoReducer from './store/reducers/singleVideo';
import allChannelReducer from './store/reducers/allChannel';
import allCategoryReducer from './store/reducers/allCategory';
import allVideoReducer from './store/reducers/allVideo';
import mySubChannelReducer from './store/reducers/mySubscriptionChannel';
import myDashboardReducer from './store/reducers/myDashboard';
import myVideoReducer from './store/reducers/myVideo';


import {
  BrowserRouter as Router,  
} from "react-router-dom";

const rootReducers=combineReducers({
  authSignup:authsSignupReducer,
  authSignin:authsSigninReducer,
  formSubmit:formSubmitReducer,
  myChannel:myChannelReducer,
  singleChannel:singleChannelReducer,
  singleCategory:singleCategoryReducer,
  singleVideo:singleVideoReducer,
  allChannel:allChannelReducer,
  allCategory:allCategoryReducer,
  allVideo:allVideoReducer,
  mySubscriptionChannel:mySubChannelReducer,
  myDashboard:myDashboardReducer,
  myVideo:myVideoReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(ReduxThunk)
  ));





const app=(
  <Router>
    <App/>
  </Router>
  );

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
   {app}
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
