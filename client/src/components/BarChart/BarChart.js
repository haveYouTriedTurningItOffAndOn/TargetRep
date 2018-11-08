import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
class BarChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Back', 'Chest', 'Legs', 'Core'],
                datasets:[
                    {
                    label: 'Days',
                    data:[ 7, 3, 5, 3 ],
                    backgroundColor: [
                        '#5BC0EB',
                        '#6CC551',
                        '#FDE74C',
                        '#C3423F'
                    ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="barChart">
            <Bar
                data={this.state.chartData}
                options={{
                    title:{
                        display:true, 
                        text:'Day to Day',
                        fontSize:25
                    },
                    legend:{
                        display:true,
                        position:'right',
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
};
export default BarChart;