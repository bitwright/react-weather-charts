import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  let average = (array) => array.reduce((a, b) => a + b) / array.length;

  return (
    <div>
      <Sparklines data={props.data} svgHeight={100} svgWidth={170}> 
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Avg: {Math.round(average(props.data))} {props.units}</div>
    </div>
  );
}