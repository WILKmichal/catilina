import { useState, useEffect } from "react"
import Axios from 'axios';

export function useAxiosGet(url) {

    const [requests, setRequests] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequests({
            loading: true,
            data: null,
            error: false
        })
        Axios.get(url).then(response => {
            setRequests({
                loading: false,
                data: response.data,
                error: false
            })
        })
            .catch(() => {
                setRequests({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return requests

}