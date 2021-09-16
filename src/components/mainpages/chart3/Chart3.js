import React, { useState, useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Chart from 'react-apexcharts'

function Chart3() {
    const state = useContext(GlobalState)
    const [startDate, setStartDate] = state.chart3_API.startDate
    const [endDate, setEndDate] = state.chart3_API.endDate
    const [tableId, setTableId] = state.chart3_API.tableId
    const [callback, setCallback] = state.chart1_API.callback

    //const [data] = state.chart1_API.data
    const data = [{ "date": "08/09/2021", "type": "MMARSII.dbo.UPLOAD_CDRRUL00", "totalCount": 107428 }, { "date": "08/08/2021", "type": "MMARSII.dbo.UPLOAD_CDRRUL00", "totalCount": 109428 }]

    const dates = ["08/08/2021", "08/09/2021"]
    const totalCounts = [107428, 109428]
    const stateArea = {
        series: [{
            name: "Area Chart",
            data: totalCounts
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
                text: 'Title',
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

        series: totalCounts,
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
            data: totalCounts
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
            Start Date: <DatePicker selected={startDate} onChange={(date) => { setStartDate(date); }} />
            End Date: <DatePicker selected={endDate} onChange={(date) => { setEndDate(date); }} />
            Table Id : <select onChange={(e) => setTableId(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <button onClick={() => { setCallback(!callback); }}>Show</button>


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

export default Chart3
