import React, { Component } from 'react';

export default class TrackSelector extends Component {
  constructor(props){
    super(props);
    const contentObject = JSON.parse(props.content);
    const tracks = contentObject.project.wavetrack.length;
    const checkedBoxes = [];
    for(var i = 0; i<tracks; i++){
      checkedBoxes.push( (i%2===0)? true : false );
    }
    this.state = {
      checkedBoxes
    };
  }

  onCheckboxChange(index){
    const changedCheckedBoxes = this.state.checkedBoxes.slice(0);
    changedCheckedBoxes[index] = !changedCheckedBoxes[index];
    this.setState({
      checkedBoxes: changedCheckedBoxes
    });
  }

  renderTracks(content){
    let self = this;
    let contentObject = JSON.parse(content);
    return contentObject.project.wavetrack.map( (track, i) => {
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
          <td>{track["$"].name}</td>
          <td>{(track.waveclip)? track.waveclip.length:'unknown'}</td>
          <td>{track["$"].channel}</td>
          <td>{track["$"].linked}</td>
          <td>{track["$"].rate}</td>
          <td>{track["$"].mute}</td>
          <td>{track["$"].solo}</td>
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
              <th>軌道名稱</th>
              <th>擁有clip(s)數目</th>
              <th>channel</th>
              <th>linked</th>
              <th>rate</th>
              <th>mute</th>
              <th>solo</th>
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
