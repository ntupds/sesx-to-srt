import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileInput from '../components/FileInput';
import Steps from '../components/Steps';
import SrtPreviewer from '../components/SrtPreviewer';

import * as fileInputActions from '../actions/fileInputActions';
import * as stepActions from '../actions/stepActions';

class App extends Component {
  constructor(props) {
    super(props);
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
        return <FileInput loadFile={this.props.fileActions.loadFile} />;
        break;

    }
  }

  render() {
    const { state } = this.props;
    return (
      <div>
        <Steps />
        {this.renderContent(state.stepReducer.step)}
      </div>
    );
  }
}

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    fileActions: bindActionCreators(fileInputActions, dispatch),
    stepActions: bindActionCreators(stepActions, dispatch)
  })
)(App);
