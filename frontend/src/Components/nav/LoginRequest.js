import React from 'react';
import Loader from '../Loader'
import { useAxiosPost } from '../../Hooks/HttpRequest'

function ListTheme() {

    const url = `localhost:3001/maxiconcours/login`

    let themes = useAxiosPost(url, params)


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
        <div>
            <div>
                <h1 className="p-5">THEME</h1>
            </div>
            <div className="centered">
                {loader}
            </div>
            <div className="w-full flex overflow-hidden p-4" >
                {content}
            </div>
        </div>
    );

}

export default ListTheme;