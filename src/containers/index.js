import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Steps from '../components/Steps';
import FileInput from '../components/FileInput';
import TrackSelector from '../components/TrackSelector';
import SrtPreviewer from '../components/SrtPreviewer';

import * as fileInputActions from '../actions/fileInputActions';
import * as stepActions from '../actions/stepActions';
import * as audioActions from '../actions/audioActions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderContent(state){
    switch (state.stepReducer.step) {
      case 1:
      default:
        return <FileInput changeStep={this.props.stepActions.changeStep} loadFile={this.props.fileActions.loadFile} />;
        break;
      case 2:
        return <TrackSelector {...state.fileInputReducer} selectTracks={this.props.fileActions.selectTracks} changeStep={this.props.stepActions.changeStep} />;
        break;
      case 3:
        return <SrtPreviewer setPlayTime={this.props.audioActions.setPlayTime} editSubtitleText={this.props.fileActions.editSubtitleText} makeSrt={this.props.fileActions.makeSrt} {...this.props.stepActions} {...state.fileInputReducer} {...state.audioReducer} />;
        break;
    }
  }

  render() {
    const { state } = this.props;
    return (
      <div>
        <Steps step={state.stepReducer.step} changeStep={this.props.stepActions.changeStep} />
        <div className="ui container">
          {this.renderContent(state)}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    fileActions: bindActionCreators(fileInputActions, dispatch),
    stepActions: bindActionCreators(stepActions, dispatch),
    audioActions: bindActionCreators(audioActions, dispatch)
  })
)(App);
