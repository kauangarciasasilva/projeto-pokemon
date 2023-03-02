import React from "react";


import Home from "../view/pokemon-list-page";
import { fetchPokemons } from "../model/sevices/fetch-pokemons-services";


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