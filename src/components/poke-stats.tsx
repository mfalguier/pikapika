import * as React from 'react'
import conf from '../conf'

interface dataStats {
    base_stat: number,
    effort: number,
    stat: { name: string, url: string }
}
interface Iprops {
    dataStats: dataStats[],
    dataTypes: {
        type:{
            name: string
        }
    }[]
}

const displayBarStat = (stat: number, maxStat: number, statAverage: number) => {
    const width = (stat / maxStat) * 100;
    const widthAverage = (statAverage / maxStat) * 100;

    return (
    <div className="bar">
        <div style={{ width: `${widthAverage}%` }} className="inner-bar-average">
            &nbsp;
        </div>
        <div className="inner-bar" style={{ width: `${width}%` }}>
          &nbsp;  
        </div>
    </div>
    )

}

const renderStatsItem = (dataStatsItem: dataStats, i: number, averageDataPerType:any) => {
    const statAverage = averageDataPerType.stats[dataStatsItem.stat.name.replace('-', '')];
    return (
        <div key={`stats${i}`}>
            <p><strong>{dataStatsItem.stat.name}</strong></p>
            <div className="row">
                <div className="col col-12 col-md-10">
                    {displayBarStat(dataStatsItem.base_stat, 255, statAverage)}
                </div>
                <div className="col col-12 col-md-2 text-right-md">
                    <div>{`${dataStatsItem.base_stat}/255`}</div>
                    <div className="average-data">{`${statAverage}/255`}</div>
                </div>
            </div>
        </div>
    )
}

const PokeStats: React.FunctionComponent<Iprops> = (props) => {
    const { dataStats, dataTypes } = props;
    const averageDataPerType = conf.BASE_STAT_TYPES.filter((item)=>{
        return item.name === dataTypes[0].type.name; // to do manage second, ... types
    });
    return (
        <div className="poke-stats">
            <h4>Pokemon stats</h4>
            {dataStats.map((dataStatsItem, i) => {
                return renderStatsItem(dataStatsItem, i, averageDataPerType[0])
            })}
            <p className="smaller-text mt-2"><span className="triangle-up d-inline-block">&nbsp;</span> Average of the same Pokemons type</p>
        </div>
    );
}

export default PokeStats;