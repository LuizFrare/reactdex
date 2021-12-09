import React, { Component } from 'react'

export default class PokemonCard extends Component {
   
    state={
        name: '',
        imageUrl: '',
        pokedexId:'',
    }
   
    componentDidMount(){
        const {name, url} = this.props;
        const pokedexId = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokedexId}.png?raw=true`
    
        this.setState({name, imageUrl, pokedexId})
    }

    render() {

        

        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className="card">
                    <h5 className="card-header">{this.state.pokedexId}</h5>
                    <div className="card-body">
                        <h6 className='card-title'>
                            {this.state.name}
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}
