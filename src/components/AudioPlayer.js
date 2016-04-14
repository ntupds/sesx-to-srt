import React, { Component } from 'react';

class AudioPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      startTime: props.startTime,
      endTime: props.endTime,
      audio: null
    };
  }

  handleFile(e){
    let file = e.target.files[0];

    const URL = window.URL || window.webkitURL;
    const fileURL = URL.createObjectURL(file);

    this.state.audio.src = fileURL;
  }

  componentDidMount(){
    this.state.audio = document.getElementById('audio');

    this.state.audio.addEventListener('timeupdate', () => {
        if (this.state.endTime && this.state.audio.currentTime >= this.state.endTime) {
            this.audio.pause();
        }
    });
  }

  render(){
    return(
      <div>
        <audio id="audio" controls>
          這位社員大大，(空一格)貴瀏覽器不支援HTML5 AUDIO QQ
          該不會是用IE吧？！請愛用Chrome或Firefox～
        </audio>
        <input accept="audio/*" type="file" onChange={this.handleFile.bind(this)} />
      </div>
    );
  }
}

AudioPlayer.propTypes = {

};

export default AudioPlayer;
