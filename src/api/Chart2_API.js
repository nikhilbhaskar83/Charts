import { useState, useEffect } from 'react'
import axios from 'axios'

function Chart2_API() {
    const [data, setData] = useState([])
    const [callback, setCallback] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [jobName, setJobName] = useState('')
    const [stepId, setStepId] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/api/chart2', {
                params: {
                    startDate: startDate,
                    jobName: jobName,
                    stepId: stepId
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
        jobName: [jobName, setJobName],
        stepId: [stepId, setStepId]
    }
}

export default Chart2_API
