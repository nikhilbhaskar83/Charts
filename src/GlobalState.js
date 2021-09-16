import React, { createContext, useState, useEffect } from 'react'
import Chart1_API from './api/Chart1_API'
import Chart2_API from './api/Chart2_API'
import Chart3_API from './api/Chart3_API'
export const GlobalState = createContext()


export const DataProvider = ({ children }) => {



    const state = {
        chart1_API: Chart1_API(),
        chart2_API: Chart2_API(),
        chart3_API: Chart3_API(),

    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}