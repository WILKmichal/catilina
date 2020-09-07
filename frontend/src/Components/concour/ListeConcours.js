import React from 'react';
import Loader from '../Loader'
import ConcoursCard from './ConcoursCard';
import { useAxiosGet } from '../../Hooks/HttpRequest'


function ListeAleatoirConcours() {

        const url = `https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/concours?page=1&limit=10`

        let concours = useAxiosGet(url)


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