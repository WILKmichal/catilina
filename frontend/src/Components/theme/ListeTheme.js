import React from 'react';
import Loader from '../Loader'
import ThemeBoutton from './ThemeBoutton';
import { useAxiosGet } from '../../Hooks/GetRequest'

function ListTheme() {

    const url = `http://localhost:3001/maxiconcours/theme`

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
            themes.data.map((NOM_THEME, key) =>
                <div key={key}>
                    <ThemeBoutton theme={NOM_THEME} />
                </div>
            )
    }


    return (
        <div>
            <div>
                <h1 className="items-center	">THEMES</h1>
            </div>
            <div className="centered">
                {loader}
            </div>
            <div className="grid-cols-4 w-full flex flex-wrap overflow-hidden p-4" >
                {content}
            </div>
        </div>
    );

}

export default ListTheme;