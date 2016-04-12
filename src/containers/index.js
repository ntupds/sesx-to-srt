import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileInput from '../components/FileInput';
import Steps from '../components/Steps';
import SrtPreviewer from '../components/SrtPreviewer';

import * as fileInputActions from '../actions/fileInputActions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <div>
        <Steps />
        <FileInput loadFile={actions.loadFile} />
      </div>
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
