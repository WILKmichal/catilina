import { useState, useEffect } from "react"
import Axios from 'axios';

export function useAxiosGet() {

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

        Axios.get('https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/Dashboard').then(response => {
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
    }, ['https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/Dashboard'])

    return requests

}

