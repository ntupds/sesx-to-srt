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
    this.state = {
      step: 1
    };
  }

  renderContent(step){
    switch (step) {
      case 2:
        return <div>step2</div>
        break;
      case 3:
        return <div>step3</div>
        break;
      case 1:
      default:
        return <FileInput loadFile={this.props.actions.loadFile} />;
        break;

    }
  }

  render() {
    const { state, actions } = this.props;
    return (
      <div>
        <Steps />
        {this.renderContent(this.state.step)}
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
