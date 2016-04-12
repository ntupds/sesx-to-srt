import React, { Component } from 'react';
import srtTimecodeParser from '../util/AupTimecodeToSrtTimecodeParser';

export default class SrtPreviewer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const contentObject = JSON.parse(this.props.content);
    const wavetrackArray = contentObject.project.wavetrack;
    const filteredArray = wavetrackArray.filter((object, index)=>{
      return this.props.selectedTracks[index];
    });
    this.props.makeSrt(filteredArray);
  }



  renderRows(subtitlesArray){

    return subtitlesArray.map( (subtitle, index) =>
      {
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{subtitle.srtStartTimecode}</td>
            <td>{subtitle.srtEndTimecode}</td>
            <td>{subtitle.defaultTag}</td>
          </tr>
          );
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
            {this.renderRows(this.props.subtitles)}
          </tbody>
        </table>
      </div>
    );
  }
}
