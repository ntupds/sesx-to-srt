import React, { Component } from 'react';

export default class TrackSelector extends Component {
  constructor(props){
    super(props);
  }

  renderTracks(content){
    let contentObject = JSON.parse(content);
    return contentObject.project.wavetrack.map( (track, i) => {
        return (
          <tr key={`track${i}`}>
            <td>{track["$"].name}</td>
            <td>{track.waveclip.length}</td>
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
      <div>
        <table className="ui celled striped table">
          <thead>
            <tr>
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
