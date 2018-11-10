import React, { Component } from "react";
import Table from "../components/Table/Table";
import PieChart from "../components/PieChart/PieChart";
import LineChart from "../components/LineChart/LineChart";
import BarChart from "../components/BarChart/BarChart";
class Stats extends Component {

    render() {
        return (

            <div>
                <div class="row">
                    <div class="col card">
                        <BarChart />
                    </div>
                    <div class="col card">
                        <LineChart />
                    </div>
                </div>
                <div class="row">
                    <div class="col-4 card">
                        <PieChart />
                    </div>
                    <div className="col-8 card">
                        <Table />
                    </div>
                </div>
            </div>

        );
    };
}
export default Stats;