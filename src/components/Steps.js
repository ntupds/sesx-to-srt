import React, { Component } from 'react';

export default class Steps extends Component {
  constructor(props){
    super(props);
    this.state = {
      stepsInfo: [
        {
          title: '匯入aup檔',
          description: '請點擊以下區域或直接拖曳檔案'
        },
        {
          title: '選擇軌道',
          description: '請選擇需要轉成字幕的軌道'
        },
        {
          title: '轉成srt檔',
          description: '轉換成能夠匯入剪輯軟體的srt檔'
        }
      ]
    };
  }

  renderSteps(step){
    return this.state.stepsInfo.map( (stepInfo, i) => {
      let className = '';
      if((i+1)<step) className = 'completed';
      else if((i+1)===step) className = 'active';
      return(
        <div key={i} className={`${className} step`}>
          <div className="content">
            <div className="title">{stepInfo.title}</div>
            <div className="description">{stepInfo.description}</div>
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div className="ui ordered steps">
        {this.renderSteps(this.props.step)}
      </div>
    );
  }
}
