import React, { Component } from 'react';

export default class Steps extends Component {
  render(){
    return(
      <div className="ui ordered steps">
        <div className="active step">
          <div className="content">
            <div className="title">匯入aup檔</div>
            <div className="description">請點擊以下區域或直接拖曳檔案</div>
          </div>
        </div>
        <div className="step">
          <div className="content">
            <div className="title">選擇軌道</div>
            <div className="description">請選擇需要轉成字幕的軌道</div>
          </div>
        </div>
        <div className="step">
          <div className="content">
            <div className="title">轉成srt檔</div>
            <div className="description">轉換成能夠匯入剪輯軟體的srt檔</div>
          </div>
        </div>
      </div>
    );
  }
}
