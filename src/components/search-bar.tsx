import * as React from 'react'
interface Iprops{
    callbackSearchText: (value:string) => void
}
interface Istate{
    searchText: string
    placeholder: string
    lockSearch: boolean
}

class SearchBar extends React.Component<Iprops, Istate> {
    searchTimer:number;
    constructor(props:Iprops) {
        super(props);
        this.searchTimer = 1500;
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            searchText: "", 
            placeholder: "Search your favorite pokemon by name or id",
            lockSearch: false,
        }
    }
    handleChange(event:any) {
        const val = event.target.value;
        this.setState({ searchText: val },()=>{
            if(!this.state.lockSearch){
                this.setState({lockSearch:true});
                setTimeout(()=>this.search(), this.searchTimer);
            }
        });
    }

    search(){
        this.props.callbackSearchText(this.state.searchText);
        this.setState({lockSearch: false});
    }
    render() {
        return <div>
            <div className="input-group">
                <input type="text" className="form-control" onKeyUp={this.handleChange} placeholder={this.state.placeholder} />
            </div>
        </div>
    };
}

export default SearchBar;