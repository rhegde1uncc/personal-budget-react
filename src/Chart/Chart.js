import React from 'react';
import { Pie } from "react-chartjs-2";

export default class Chart extends React.Component {

  render() {
    return (
        <Pie data={this.props.dataSource} width={400} height={400} /> 
    )
  }
}