import { useState, useEffect } from 'react'
import axios from 'axios'

function Chart3_API() {
    const [data, setData] = useState([])
    const [callback, setCallback] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEnddate] = useState(new Date())
    const [tableId, setTableId] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/api/chart3', {
                params: {
                    startDate: startDate,
                    endDate: endDate,
                    tableId: tableId
                }
            })
            setData(res.data)
        }

        getData()
    }, [callback])
    return {
        data: [data, setData],
        callback: [callback, setCallback],
        startDate: [startDate, setStartDate],
        endDate: [endDate, setEnddate],
        tableId: [tableId, setTableId]
    }
}

export default Chart3_API
