import * as React from 'react'
import axios from 'axios'
import conf from '../conf'
import PokeStats from './poke-stats'
import PokeTypes from './poke-types'
import { Link, Redirect } from 'react-router-dom'
import * as socketIOClient from "socket.io-client";
import TweetItem from './tweet-item'

interface Iprops {
    match: any
}

interface Istate {
    pokeData: any,
    isLoading: boolean,
    liveTweetList: any,
    isInError: boolean
}

export class PokeDetail extends React.Component<Iprops, Istate> {
    constructor(props: any) {
        super(props);
        this.getPokeTweet = this.getPokeTweet.bind(this);
        this.state = {
            isLoading: false,
            pokeData: null,
            liveTweetList: [],
            isInError: false
        }
    }

    getPokeTweet() {
        if(this.props.match.params.name){
            axios.post('/setPokeSearch', {search : this.props.match.params.name});
        }   
    }

    componentWillUnmount(){
        socketIOClient('http://localhost:3000/').disconnect();
    }

    componentDidMount() {
        // connect to socket io
        const socket = socketIOClient('http://localhost:3000/');

        socket.on('connect', () => {
            console.log("Socket Connected");
            this.getPokeTweet();
            socket.on("tweets", (data:any) => {
                let newList = [data].concat(this.state.liveTweetList.slice(0, 15));
                this.setState({ liveTweetList: newList });
            });
        });
        socket.on('disconnect', () => {
            socket.off("tweets")
            socket.removeAllListeners();
            console.log("Socket Disconnected");
        });


        this.setState({ isLoading: true })
        axios(`${conf.API.END_POINT}/pokemon/${this.props.match.params.name}/`).then((response) => {
            this.setState({
                pokeData: response.data,
                isLoading: false
            });
        }).catch((error) => {
            this.setState({
                pokeData: null,
                isLoading: false,
                isInError: true
            });
        })
        
    }
    
    
    render() {
        const pokeResultList = this.state.pokeData;
        if (pokeResultList) {
            return (
                <div className="poke-detail">
                    <div className="row">
                        <div className="col col-12 col-lg-4 mb-4">
                            <h1>{pokeResultList.name}</h1>
                            <img src={pokeResultList.sprites.front_default} />
                            <div className="mb-4">
                            <PokeTypes dataTypes={pokeResultList.types} />
                            </div>
                            <Link className="btn btn-primary" to="/">Return to result list</Link>
                        </div>
                        <div className="col col-12 col-lg-8">
                            <PokeStats dataStats={pokeResultList.stats} dataTypes={pokeResultList.types} />
                        </div>
                    </div>
                    {(this.state.liveTweetList && this.state.liveTweetList.length>0) ?
                        <div className="tweet-container mt-4">
                        <h3 className="mb-4">Follow everything about {pokeResultList.name} on twitter !!</h3>
                        {
                        this.state.liveTweetList.map((item:any, i:number) =>
                            <TweetItem key={i} tweetData={item} />
                        )
                        }
                        </div>
                    :null
                    }
                </div>
            )
        } else {
            if(this.state.isInError){
                return <Redirect to='/'/>;
            }else{
                return null;
            }
                
        }

    }
}
