import React, { Component } from "react";
import Table from "../components/Table/Table";
import PieChart from "../components/PieChart/PieChart";
import LineChart from "../components/LineChart/LineChart";
import BarChart from "../components/BarChart/BarChart";
class Stats extends Component {

    render() {
        return (

            <div>
                <div className="row">
                    <div className="col card">
                        <BarChart />
                    </div>
                    <div className="col card">
                        <LineChart />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 card">
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