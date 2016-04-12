import React, { Component } from 'react';

export default class TrackSelector extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.content);
    return(
      <div>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>軌道名稱</th>
              <th>channel</th>
              <th>linked</th>
              <th>rate</th>
              <th>mute</th>
              <th>solo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>4</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
