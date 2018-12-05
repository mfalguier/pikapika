import * as React from 'react'
import { Link } from 'react-router-dom'
const pikaa = require('../../img/wKI5gLO.jpg');

export const NotFound: React.FunctionComponent<{}> = () => {
    return <div className="text-center mb-4">
        <img className="mb-2 img-fluid" width="361" height="407" src={pikaa} />
        <h1 className="mb-4">Oups this is a big 404 !</h1>
        <Link className="btn btn-primary" to="/">Back to home</Link>
    </div>


}