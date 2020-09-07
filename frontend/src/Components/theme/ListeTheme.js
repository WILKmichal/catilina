import React from 'react';
import Loader from '../Loader'
import ThemeBoutton from './ThemeBoutton';
import { useAxiosGet } from '../../Hooks/HttpRequest'

function ListTheme() {

    const url = `https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/theme`

    let themes = useAxiosGet(url)


    let content = null
    let loader = null

    if (themes.error) {
        content = <p>erreur pas de concours</p>
    }

    if (themes.loading) {
        loader = <Loader></Loader>
    }

    if (themes.data) {
        content =
            themes.data.map((theme, key) =>
                <div key={key}>
                    <ThemeBoutton theme={theme} />
                </div>
            )
    }


    return (
        <div className="p-5">
            <div className="centered">
                {loader}
            </div>
            <div className="">
                {content}
            </div>
        </div>
    );

}

export default ListTheme;