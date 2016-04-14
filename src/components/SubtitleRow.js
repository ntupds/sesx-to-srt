import React, { Component, PropTypes } from 'react';

class SubtitleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      tempText: props.text || ''
    };
  }

  renderText(){
    const { index } = this.props;
    if(this.state.showEdit){
      return (
        <td>
          <input type="text"
            value={this.state.tempText}
            onChange={this.handleTextOnChange.bind(this)}
            onBlur={this.handleTextOnBlur.bind(this, index)}
            onKeyDown={e => this.handleOnKeyDown(e, index)}
            autoFocus={true}
          />
        </td>
      );
    } else{
      return <td onClick={this.handleTextOnClick.bind(this)}>{this.state.tempText}</td>;
    }
  }

  handleTextOnClick(){
    this.setState({ showEdit: true});
  }
  handleTextOnChange(e){
    this.setState({ tempText: e.target.value });
  }
  handleTextOnBlur(index){
    this.submitEdit(index);
  }
  handleOnKeyDown(e, index){
    if( e.which === 13 && this.state.tempText) {
      this.submitEdit(index);
    }
  }
  submitEdit(index){
    this.setState({ showEdit: false});
    this.props.editSubtitleText(index, this.state.tempText);
  }

  render() {
    const { index, srtStartTimecode, srtEndTimecode, defaultTag, text } = this.props;
    return (
      <tr>
        <td>
          {index+1}
        </td>
        <td>
          {srtStartTimecode}
        </td>
        <td>
          {srtEndTimecode}
        </td>
        <td>
          {defaultTag}
        </td>
        {this.renderText()}
      </tr>
    );
  }

};

SubtitleRow.propTypes = {
  text: PropTypes.string.isRequired
};

export default SubtitleRow;
