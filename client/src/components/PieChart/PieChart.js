import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Back', 'Chest', 'Legs', 'Core'],
                datasets: [
                    {
                        label: 'Days',
                        data: [10, 12, 4, 10],
                        backgroundColor: [
                            '#5BC0EB',
                            '#6CC551',
                            '#FDE74C',
                            '#C3423F'
                        ]
                    }
                ], 
            }
        }
    }
    render() {
        return (
            <div className="pieChart">
                <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'This Month',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'left',
                        }
                    }}
                />
            </div>
        );
    }
}
export default PieChart;