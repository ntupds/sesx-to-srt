import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import FileInput from '../components/FileInput';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <FileInput />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(App);
