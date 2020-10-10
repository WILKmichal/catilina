import React from 'react';
import Loader from '../Loader'
import ConcoursCard from './ConcoursCard';
import { useAxiosPut } from '../../Hooks/PutRequest'


function ListeAleatoirConcours() {

        const url = `http://localhost:3001/maxiconcours/concours`

        let concours = useAxiosPut(url)
//      console.log(concours)


        let content = null
        let loader = null

        if (concours.error) {
                content = <p>erreur pas de concours</p>
        }

        if (concours.loading) {
                loader = <Loader></Loader>
        }

        if (concours.data) {
                content =
                        concours.data.map((concour, key) =>
                                <div key={key}>
                                        <ConcoursCard
                                                concour={concour} />
                                </div>
                        )
        }


        return (
                <div className="p-5">
                        <div className="centered">
                                {loader}
                        </div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
                                {content}
                        </div>
                </div>
        );
}

export default ListeAleatoirConcours;