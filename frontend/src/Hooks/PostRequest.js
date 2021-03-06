import { useState, useEffect } from "react"
import Axios from 'axios';

export function useAxiosPost(url, params) {

    // exemple de params
    // const params = JSON.stringify({

    //     "email": email,

    //     "password": password,

    //   });

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
        Axios.post(url, params, { "headers": { "content-type": "application/json", }, }).then(response => {
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
    }, [url, params])

    return requests

}