import React, { Component } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mockdata from '../mockdata';
require('highcharts-3d')(Highcharts);

const options = {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 10,
            viewDistance: 40,
            depth: 50
        },
        events: {
            click: function (event) {
                console.log(event);
            },
            selection: function (event) {
                console.log(event);
            },
            drilldown: function (e) {
                console.log(e);
            }
        },
        zoomType: 'x'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: mockdata.map(data => data.blogPost),
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage',
            skew3d: true
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        },
        series: {
            cursor: 'pointer',
            events: {
                click: function (event) {
                    console.log(event);
                },
                legendItemClick : function(event){
                    console.log(event);
                }
            }
        }
    },
    series: [{
        name: 'Likes',
        data: mockdata.map(data => data.likes)
    }, {
        name: 'Comments',
        data: mockdata.map(data => data.comments)
    }, {
        name: 'Views',
        data: mockdata.map(data => data.views)
    }]
}



export default class VoxDashboard extends Component {

    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        );
    }
}

