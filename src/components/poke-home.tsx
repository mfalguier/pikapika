import * as React from 'react'
import SearchBar from './search-bar'
import axios from 'axios'
import conf from '../conf'
import Loader from './shared/loader'
import PokeResultList from './poke-result-list';
const homePicture = require('../img/sacha.png');

interface IpokeList {
    name: string,
    url: string
}

interface Istate {
    pokeResultList: any
    isLoading: boolean,
    isInError: boolean,
    searchText: string | null
}

export class PokeHome extends React.Component<{}, Istate> {
    pokeList: IpokeList[] | null;
    constructor(props: any) {
        super(props);
        this.search = this.search.bind(this);
        this.state = {
            isLoading: false,
            isInError: false,
            pokeResultList:  localStorage.pokeResultList || null,
            searchText: null
        }
    }
    componentDidMount() {

        axios(`${conf.API.END_POINT}/pokemon/`).then((response) => {
            this.pokeList = response.data.results;
        }).catch((error) => {
            this.pokeList = null;
        })
    }

    search = (searchText: string) => {
        if (searchText !== '' && this.pokeList) {
            this.setState({
                isLoading: true,
                searchText: searchText
            });
            const pokeResultList = this.pokeList.filter((pokeItem: IpokeList) => {
                return pokeItem.name.indexOf(searchText) === 0;
            });
            if (pokeResultList.length === 0) {
                this.setState({
                    pokeResultList: null,
                    isInError: true,
                    isLoading: false
                });
            } else {
                setTimeout(() => {
                    this.setState({
                        pokeResultList: pokeResultList,
                        isLoading: false,
                        isInError: false
                    },()=>{
                        localStorage.setItem("pokeResultList", JSON.stringify({pokeResultList}));
                    })
                }
                    , 1000)
            }

        }
    }

    render() {
        return <div>
            <div className="text-center mb-4">
                <img src={homePicture} />
            </div>
            <div className="mb-4">
                <SearchBar callbackSearchText={this.search} />
            </div>
            <div className="result-container">
            {
                (this.state.isLoading) ?
                    <Loader />
                    : null
            }
            <div>
                {(this.state.pokeResultList && this.state.pokeResultList.length > 0) ?
                    <PokeResultList data={this.state.pokeResultList} />
                    : null
                }
            </div>
            <div>
                {(this.state.isInError) ?
                    <p>No result found for : {this.state.searchText}</p>
                    : null
                }
            </div>
            </div>
        </div>
    };
}


