import React, { Component } from "react";
import Table from "../components/Table/Table";
import PieChart from "../components/PieChart/PieChart";
import LineChart from "../components/LineChart/LineChart";
import BarChart from "../components/BarChart/BarChart";
class Stats extends Component {

    render() {
        return (
            <div>
                <div class="column">
                    <div class="level">
                        <div class="box column">
                            <BarChart />
                            </div>
                        <div class="box column ">
                            <LineChart />
                            </div>
                    </div>
                    <div class="level">
                        <div class="box column">
                            <PieChart />
                            </div>
                        <div className="box column is-two-thirds ">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default Stats;