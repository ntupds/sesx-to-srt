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

  handleDownload(){
    let output = '';
    this.props.subtitles.map((subtitle, index) => {
      output += (index+1) + '\r\n';
      output += (subtitle.srtStartTimecode) + ' --> ' + (subtitle.srtEndTimecode) + '\r\n';
      output += (subtitle.text)? subtitle.text : subtitle.defaultTag;
      output += '\r\n\r\n';
    });

    let blob = new Blob([output], {type: 'text/srt'});
    let filename = '字幕.srt';
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem)
        elem.click();
        document.body.removeChild(elem);
    }
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
            <td>{subtitle.text}</td>
          </tr>
          );
      }
    );

  }

  render(){
    return (
      <div>
        <button className="huge fluid ui button" onClick={this.handleDownload.bind(this)}>
          <i className="download icon"></i>
          匯出
        </button>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>id</th>
              <th>起始時間</th>
              <th>結束時間</th>
              <th>字幕標籤</th>
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
