import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Back', 'Chest', 'Legs'],
                datasets: [
                    {
                        label: 'Max Weight',
                        data: [100, 220, 300],
                        backgroundColor: [
                            'transparent',
                        ],
                        borderColor: [
                            '#aa74db'
                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="LineChart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Weekly Glance',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right',
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}
export default LineChart;