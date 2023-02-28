import React from "react";

import { fetchPokemons } from "../model/services/fetch-pokemons-services";
import Home from "../view/pokemon-list-page";

interface Props{

}
interface State{
    pokemonPromises: any[];
}

export default class PokemonListControler extends React.Component <Props,State>{
    [x: string]: any;

    constructor(props:Props){
        super(props);
        this.state ={
            pokemonPromises:[]
        };
    }

    componentDidMount():void{
        this. fetchPokemonFromApi();
    }
    fetchPokemonFromApi(){
        const data = fetchPokemons();
        this.setState({pokemonPromises: data})
    }
    render(){



        return<Home pokemonsPromises={this.state.pokemonPromises}/>;


    }
    

}