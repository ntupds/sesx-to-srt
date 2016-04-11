import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { parseString } from 'xml2js';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
  }

  onDrop(files){
    let loadFile = this.props.loadFile;
    files.forEach((file) => {
      let r = new FileReader();
      r.onload = function(e) {
        parseString(e.target.result, function (err, result) {
          loadFile(JSON.stringify(result));
        });
      }
      r.readAsText(file);
    });
  }

  render() {
    const { loadFile } = this.props;

    return (
      <div>
        <Dropzone accept="application/x-aup" multiple={false} onDrop={this.onDrop.bind(this)}>
          <div>點擊以選擇檔案或直接拖曳至此</div>
        </Dropzone>
      </div>
    );
  }
};
