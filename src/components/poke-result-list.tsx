import * as React from 'react'
import conf from '../conf'
import { Link } from 'react-router-dom'

// interface data{
//     name: string,
//     url: string
// }

interface Iprops{
    data: any 
}

const renderPokeResult = (pokeItem:any, i: number) => {
    
    const regEx = /\d{1,}\/$/;
    const pokeId = regEx.exec(pokeItem.url);
    let pokeIdt;
    if(pokeId){
        pokeIdt = pokeId[0].substring(0,pokeId[0].length-1);
    }else{
        pokeIdt = null
    }


    return (
        <div key={`poke${i}`} className="poke-item">
            <Link className="d-flex align-items-center mb-3 pr-2 pl-2" to={`/pokemon/${pokeItem.name}/`}>
                <div className='mr-2'><img width="40" height="auto" src={`${conf.SPRITE_URL}/${pokeIdt}.png`} /></div>
                <div className='mr-2 text-capitalize'>{pokeItem.name}</div>
                <div className="ml-auto">{pokeIdt}</div>
            </Link>
        </div>
    )

}

const isStorageData = (str:any)=>{
    try {
        JSON.parse(str);
    } catch (e) {
        return str;
    }
    return JSON.parse(str).pokeResultList;
}

const PokeResultList: React.FunctionComponent<Iprops> = (props) => {
    let {data} = props;
    data = isStorageData(data);
    return (
        data.map((pokeItem:any, i: number) => {
            return (renderPokeResult(pokeItem, i))
        })
    );
}

export default PokeResultList;