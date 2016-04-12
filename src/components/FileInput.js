import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { parseString } from 'xml2js';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  onDrop(files){
    let self = this;
    files.forEach((file) => {
      let reader = new FileReader();
      reader.onload = (e) => {
        self.setState({
          progress: 0
        });
        parseString(e.target.result, (err, result) => {
          if(err){
            console.error('error!');
          }else{
            self.props.loadFile(JSON.stringify(result));
          }
        });
      }
      reader.onprogress = (e) => {
        if(e.lengthComputable){
          self.setState({
            progress: (e.loaded / e.total)
          });
        }
      }
      reader.onloadend = (e) => {
        self.setState({
          progress: 100
        });
      }
      reader.readAsText(file);
    });
  }

  render() {
    const { loadFile } = this.props;

    return (
      <div>
        <Dropzone accept="application/x-aup" multiple={false} onDrop={this.onDrop.bind(this)}>
          <div>點擊以選擇檔案或直接拖曳至此</div>
        </Dropzone>
        <div>{this.state.progress}</div>
      </div>
    );
  }
};
