import React, { useState, useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import Chart from 'react-apexcharts'

function Chart4() {
    const state = useContext(GlobalState)
    // const [areas] = state.areaAPI.areas
    //  const [locations] = state.locationsAPI.locations
    const dates = ["08/08/2021", "08/09/2021"]
    const totalCounts = [107428, 109428]
    const stateArea = {
        series: [{
            name: "STOCK ABC",
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
            subtitle: {
                text: 'Total Count',
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


    return (
        <div className="areas">

            <div className="col">
                {<Chart options={stateArea.options} series={stateArea.series} type="area" height={250} />}
            </div>

            <div className="col">
                {<Chart options={stateDonut.options} series={stateDonut.series} type="donut" height={250} />}
            </div>

        </div >
    )
}

export default Chart4
