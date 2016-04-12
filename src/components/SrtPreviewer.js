import React, { Component } from 'react';

export default class SrtPreviewer extends Component {
  constructor(props){
    super(props);
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
            <th>id</th>
            <th>起始時間</th>
            <th>結束時間</th>
            <th>字幕內容</th>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    );
  }
}
