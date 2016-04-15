import React, { Component } from 'react';

export default class TrackSelector extends Component {
  constructor(props){
    super(props);
    if(props.selectedTracks.length>0){
      this.state = {
        checkedBoxes: props.selectedTracks
      };
    }else{
      const contentObject = JSON.parse(props.content);
      const tracks = contentObject.sesx.session[0].tracks[0].audioTrack.length;
      const checkedBoxes = [];
      for(var i = 0; i<tracks; i++){
        checkedBoxes.push( true );
      }
      this.state = {
        checkedBoxes
      };
      props.selectTracks(checkedBoxes);
    }
  }

  onCheckboxChange(index){
    const changedCheckedBoxes = this.state.checkedBoxes.slice(0);
    changedCheckedBoxes[index] = !changedCheckedBoxes[index];
    this.setState({
      checkedBoxes: changedCheckedBoxes
    });
    this.props.selectTracks(changedCheckedBoxes);
  }

  renderTracks(content){
    let self = this;
    let contentObject = JSON.parse(content);
    return contentObject.sesx.session[0].tracks[0].audioTrack.map( (track, i) => {
      return (
        <tr key={`track${i}`}>
          <td>
            <input type="checkbox"
              name="selectedTracks"
              value={i}
              checked={self.state.checkedBoxes[i]}
              onChange={self.onCheckboxChange.bind(this, i)}
            />
          </td>
          <td>{track["$"].id}</td>
          <td>{track.trackParameters[0].name[0]}</td>
          <td>{track.audioClip? track.audioClip.length : 'unknown'}</td>
          <td>{track.trackAudioParameters[0]["$"].audioChannelType}</td>
        </tr>
      );
    });
  }

  render(){
    return(
      <div id="trackSelector">
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th></th>
              <th>id</th>
              <th>軌道名稱</th>
              <th>clip(s)數目</th>
              <th>channel type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTracks(this.props.content)}
          </tbody>
        </table>
      </div>
    );
  }
}
