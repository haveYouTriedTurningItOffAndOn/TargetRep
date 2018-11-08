import React, { Component } from "react";

class Table extends Component {


    render() {
        return (
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Muscle Group</th>
                        <th>Target Muscle</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Today</td>
                        <td>Upper</td>
                        <td>Shoulder</td>
                        <td>100</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>Today</td>
                        <td>Upper</td>
                        <td>Shoulder</td>
                        <td>100</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>Today</td>
                        <td>Upper</td>
                        <td>Shoulder</td>
                        <td>100</td>
                        <td>10000</td>
                    </tr>
                </tbody>
            </table>
        );
    };
}

export default Table;