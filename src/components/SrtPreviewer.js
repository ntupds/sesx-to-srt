import React, { Component } from 'react';
import srtTimecodeParser from '../util/AupTimecodeToSrtTimecodeParser';

import SubtitleRow from './SubtitleRow';
import AudioPlayer from './AudioPlayer';

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
      output += (subtitle.text.length>0)? subtitle.text : subtitle.defaultTag;
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
    let self = this;
    return subtitlesArray.map( (subtitle, index) =>
      {
        return (
          <SubtitleRow key={index} index={index} {...subtitle} editSubtitleText={self.props.editSubtitleText} />
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
        <AudioPlayer />
        <table id="srtTable" className="ui celled striped table">
          <thead>
            <tr>
              <th>id</th>
              <th>起始時間</th>
              <th>結束時間</th>
              <th>字幕標籤</th>
              <th width="50%">字幕內容</th>
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
