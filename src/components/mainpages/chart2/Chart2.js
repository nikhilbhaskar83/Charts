import React, { useState, useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import Chart from 'react-apexcharts'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function Chart2() {
    const state = useContext(GlobalState)
    const [startDate, setStartDate] = state.chart2_API.startDate
    const [jobName, setJobName] = state.chart2_API.jobName
    const [stepId, setStepId] = state.chart2_API.stepId
    const [data] = state.chart1_API.data
    const [callback, setCallback] = state.chart2_API.callback

    const dates = ["08/09/2021", "08/12/2021", "08/18/2021", "08/24/2021", "08/25/2021", "08/27/2021"]
    const runDuration = [252, 396, 193, 184, 211, 176]

    const stateArea = {
        series: [{
            name: "Run Duration",
            data: runDuration
        }],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },

            title: {
                text: 'Area Chart',
                align: 'left'
            },

            labels: dates,
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        },


    };


    const stateDonut = {

        series: runDuration,
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };


    const stateBar = {
        series: [{
            data: runDuration,
            name: "Run Duration"
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: dates,
        }
    };

    return (
        <div className="areas">
            Start Date: <DatePicker selected={startDate} onChange={(date) => { setStartDate(date) }} />
            Job Name : <input type="text" name="jobname" value={jobName} onChange={(e) => setJobName(e.target.value)} />
            Step Id : <select onChange={(e) => setStepId(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <button type="button" onClick={() => { setCallback(!callback); }}>Show</button>
            <div className="col">
                {<Chart options={stateArea.options} series={stateArea.series} type="area" height={250} />}
            </div>

            <div className="col">
                {<Chart options={stateDonut.options} series={stateDonut.series} type="donut" height={250} />}

            </div>

            <div className="col">
                {<Chart options={stateBar} series={stateBar.series} type="bar" height={250} />}
            </div>

        </div >
    )
}

export default Chart2
