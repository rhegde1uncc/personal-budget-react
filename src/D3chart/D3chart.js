import React from 'react';
import * as d3 from 'd3';

 const width = 600;
  const height = 300;
  var radius = Math.min(width, height) / 2;
  var svg;
  var color;
  var pie;
  var arc;
  var outerArc;
  var dataReady;

export default class D3Chart extends React.Component {

  componentDidUpdate(){
    this.draw();
 }

midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

getD3Data() {
    const arr = [];
    for (let i = 0; i < this.props.dataSource.datasets[0].data.length; i++) {
      arr.push({
        label: this.props.dataSource.labels[i],
        value: this.props.dataSource.datasets[0].data[i],
      });
    }
    return arr;
  }


draw() {
    this.svg = d3.select('svg')
               .attr('width', width)
               .attr('height', height)
               .append('g')
               .attr('transform', 'translate(' + width / 2 + ',' +
                height / 2 + ')');
   radius = Math.min(width, height) / 2 ;

    color = d3.scaleOrdinal()
            .domain(this.props.dataSource.labels)
           .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

    pie = d3.pie()
    .sort(null)
               .value((d) => d.value);

    dataReady = pie(this.getD3Data());

    arc = d3.arc()
    .innerRadius(radius * 0.5)
    .outerRadius(radius * 0.8);

    outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

    this.svg
  .selectAll('allSlices')
  .data(dataReady)
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', (d) => (color(d.data.label)))
  .attr('stroke', 'white')
  .style('stroke-width', '2px')
  .style('opacity', 0.7);

    this.svg
  .selectAll('allPolylines')
  .data(dataReady)
  .enter()
  .append('polyline')
    .attr('stroke', 'black')
    .style('fill', 'none')
    .attr('stroke-width', 1)
    .attr('points', (d) => {
        const posA = arc.centroid(d);
        const posB = outerArc.centroid(d);
        const posC = outerArc.centroid(d);
        posC[0] =radius * 0.95 * (this.midAngle(d) < Math.PI ? 1 : -1);
        return [posA, posB, posC];
      });


    this.svg
      .selectAll('allLabels')
      .data(dataReady)
      .enter()
      .append('text')
        .text( (d) => {return d.data.label; } )
        .attr('transform', (d) => {
            const pos = outerArc.centroid(d);
            pos[0] =radius * 0.99 * (this.midAngle(d) < Math.PI ? 1 : -1);
            return 'translate(' + pos + ')';
          })
        .style('text-anchor', (d) => {
            return (this.midAngle(d) < Math.PI ? 'start' : 'end');
          });
    }
  render() {
    return (
        <svg/> 
    )
  }
}