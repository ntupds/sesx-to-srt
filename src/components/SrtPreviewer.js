import React, { Component } from 'react';
import srtTimecodeParser from '../util/AupTimecodeToSrtTimecodeParser';

export default class SrtPreviewer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  renderRows(content, selectedTracks){
    const contentObject = JSON.parse(content);
    const wavetrackArray = contentObject.project.wavetrack;
    const filteredArray = wavetrackArray.filter((object, index)=>{
      return selectedTracks[index];
    });

    let subtitleIndex = 0;

    return filteredArray.map( (wavetrack, wIndex) =>
      {
        return wavetrack.waveclip.map( (clip, cIndex) => {
          subtitleIndex++;
          return (
            <tr>
              <td>{subtitleIndex}</td>
              <td>{srtTimecodeParser(clip["$"].offset)}</td>
              <td>{ srtTimecodeParser(parseFloat(clip["$"].offset) + parseFloat(clip.sequence[0]["$"].numsamples / wavetrack["$"].rate))}</td>
              <td>{wavetrack["$"].name}{cIndex+1}</td>
            </tr>
            );
        });
      }
    );

  }

  render(){
    return (
      <div>
        <button className="huge fluid ui button">
          <i className="download icon"></i>
          匯出
        </button>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>id</th>
              <th>起始時間</th>
              <th>結束時間</th>
              <th>字幕內容</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows(this.props.content, this.props.selectedTracks)}
          </tbody>
        </table>
      </div>
    );
  }
}
