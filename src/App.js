import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import * as rrd from 'react-router-dom';
import Home from './containers/Home/Home.jsx';
import Mall from './containers/Mall/Mall.jsx';
import About from './containers/About/About.jsx';
import {EMPTY_NAME,MODIFY_NAME} from './redux/constants/actionTypes.js'
import { connect, Provider } from 'react-redux';
import ShowName from './components/ShowName/ShowName.jsx';
import ModifyName from './components/ModifyName/ModifyName.jsx';
import {getData} from './redux/actions/name.js';

console.log("react-router-dom",rrd );

class App extends Component {

  render() {
      console.log("app,props", this.props);
    let {name, modifyName, state, dispatch, empty_name} = this.props;
    return (
      <div className="App">
          <h3>this is app</h3>
          <ShowName state={state} name={name}></ShowName>
          <ModifyName state={state} dispatch={dispatch} empty_name={empty_name}></ModifyName>
          <Link to='/home'>home</Link><br/>
          <Link to='/mall'>mall</Link><br/>
          <Link to='/about'>about</Link><br/>
          <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/mall" component={Mall}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="*" component={Home}></Route>
          </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
    let {name} = state.modifyNameReducer;
    return {
        state: state.modifyNameReducer,
        name: name,
        color: 'red'
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        modify_name(name) {
            dispatch({type: MODIFY_NAME, name})
        },
        empty_name() {
            dispatch({type: EMPTY_NAME})
        }
    }
}

let DealApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default DealApp;
