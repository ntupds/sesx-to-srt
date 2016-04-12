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

  renderButtons(step){
    let disabledPrevious = (step===1)? true : false;
    let disabledNext = (step===3)? true : false;
    return(
      <div>
      <button className="ui left labeled icon button" disabled={disabledPrevious} onClick={() => {this.props.changeStep(step-1)}}>
        <i className="left arrow icon"></i>
        上一步
      </button>
      <button className="ui right labeled icon button" disabled={disabledNext} onClick={() => this.props.changeStep(step+1)}>
        <i className="right arrow icon"></i>
        下一步
      </button>
      </div>
    );
  }

  render(){
    const { step } = this.props;
    return(
      <div>
        <div className="ui ordered steps">
          {this.renderSteps(step)}
        </div>
        <div>
          {this.renderButtons(step)}
        </div>
      </div>
    );
  }
}
