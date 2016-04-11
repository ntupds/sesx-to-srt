import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import FileInput from '../components/FileInput';
import * as fileInputActions from '../actions/fileInputActions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <FileInput loadFile={actions.loadFile} />
    );
  }
}

export default connect(state => ({
    state: state.fileInputReducer
  }),
  (dispatch) => ({
    actions: bindActionCreators(fileInputActions, dispatch)
  })
)(App);
