import * as React from 'react'

interface dataTypes {
    slot: number,
    type: { name: string, url: string }
}
interface Iprops {
    dataTypes: dataTypes[]
}


const renderTypesItem = (dataTypesItem: dataTypes, i: number) => {
    return (
        <div key={`stats${i}`}>
            <p>{dataTypesItem.type.name}</p>
        </div>
    )
}

const PokeTypes: React.FunctionComponent<Iprops> = (props) => {
    const { dataTypes } = props;
    return (
        <div className="poke-stats">
            <p><strong>Pokemon types</strong></p>
            {dataTypes.map((dataTypesItem, i) => {
                return renderTypesItem(dataTypesItem, i)
            })}
        </div>
    );
}

export default PokeTypes;