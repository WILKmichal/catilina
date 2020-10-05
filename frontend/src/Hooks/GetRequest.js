import { useState, useEffect } from "react"
import Axios from 'axios';

export function useAxiosGet(url) {

    const [requests, setRequests] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        let mounted = true

        setRequests({
            loading: true,
            data: null,
            error: false
        })
        Axios.get(url).then(response => {
            if (mounted) {
                setRequests({
                    loading: false,
                    data: response.data,
                    error: false
                })
            }
        })
            .catch(() => {
                if (mounted) {
                    setRequests({
                        loading: false,
                        data: null,
                        error: true
                    })
                }
            })

        return () => mounted = false;
    }, [url])

    return requests

}

