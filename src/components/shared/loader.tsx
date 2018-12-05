import * as React from 'react'
const loader = require('../../img/pokeball-loader.png');

const Loader: React.FunctionComponent<{}> = () => {
    return (
        <div className="text-center">
            <div className="loader-container d-inline-block">
                <img width="40" height="40" src={loader} />
            </div>
        </div>
        
    );
}

export default Loader;