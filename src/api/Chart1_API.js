import { useState, useEffect } from 'react'
import axios from 'axios'

function Chart1_API() {
    const [data, setData] = useState([])
    const [callback, setCallback] = useState(false)
    const [startDate, setStartDate] = useState(new Date())

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/api/chart1', {
                params: {
                    startDate: startDate
                }
            })
            setData(res.data)
        }

        getData()
    }, [callback])
    return {
        data: [data, setData],
        callback: [callback, setCallback],
        startDate: [startDate, setStartDate]
    }
}

export default Chart1_API
