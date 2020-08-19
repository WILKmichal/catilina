import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Loader from '../Components/Loader'
import ConcoursCard from '../Components/ConcoursCard';

function Home() {

        const url = `https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/concours?page=1&limit=10`
        const [concours,setConcours] = useState({
                loading:false,
                data:null,
                error:false
        })

        useEffect(()=>{
                setConcours({
                        loading: true,
                        data: null,
                        error: false
                })
                Axios.get(url).then(response=>{
                        setConcours({
                                loading:false,
                                data:response.data,
                                error:false
                        })
                })
                .catch(() => {
                        setConcours({
                                loading:false,
                                data:null,
                                error:true
                        })
                })
        },[url])

        let content=null

        if(concours.error){
                content= <p>erreur pas de concours</p>
        }

        if(concours.loading){
                content = <Loader></Loader>
        }

        if(concours.data){
                content=
                concours.data.map((concour,key)=>
                <div >
                        <ConcoursCard
                        concour={concour}/>
                </div>
                )
        }


        return (
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
                        {content}
                </div>
        );
}

export default Home;