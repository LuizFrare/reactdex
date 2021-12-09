import React, { Component } from 'react';
import styled from 'styled-components';
import loading from '../pokemon/loading.gif'

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;

const Card = styled.div`
    box-shadow: 10px 10px 29px -15px rgba(0,0,0,0.26);
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 10px 10px 29px -15px rgba(0,0,0,0.53);
        border: 2px solid #C81D25;
    }
    -moz-user-select:none;
    -website-user-select:none;
    user-select:none;
    -o-user-select:none
`;

export default class PokemonCard extends Component {
   
    state={
        name: '',
        imageUrl: '',
        pokedexId:'',
        imageLoading: true,
        toManyRequests: false,
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
                <Card className="card">
                    <h5 className="card-header">{this.state.pokedexId}</h5>
                    {this.state.imageLoading ?(
                        <img
                        src={loading}
                        style={{width: '5em', height: '5em'}}
                        className='card-img-top rounded mx-auto d-block mt-2'
                        alt='Carregando'
                        ></img>
                    ) : null}
                    <Sprite className="card-img-top rounded mx-auto mt-2"
                    src={this.state.imageUrl}
                    style={
                        this.state.toManyRequests ? {display : "none"} :
                        this.state.imageLoading ? null : {display: "block"}
                    }
                    onLoad={() => this.setState({ imageLoading: false })}
                    onError={() => this.setState({ toManyRequests: true })}  
                   />
                   {this.state.toManyRequests ? (
                       <h6 className="mx-auto">
                        <span className="badge badge-danger mt-2 ">Erro de pedido</span>
                    </h6>): null}
                    <div className="card-body mx-auto">
                        <h6 className='card-title'>
                        {this.state.name
                           .toLowerCase()
                           .split(' ')
                           .map(letra => letra.charAt(0).toUpperCase() + letra.substring(1))
                           .join(' ')}
                        </h6>
                    </div>
                </Card>
            </div>
        )
    }
}
