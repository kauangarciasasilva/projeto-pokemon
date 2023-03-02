
import { getPokemonColorByType } from "../../utils/pokemon-colors-util";
import React from "react";
import PokemonEntity from "../../pokemon-list/model/pokemon-entity";

import { Link } from "react-router-dom";
import { Container, PokemonStyle } from "./style";

interface Props{
    pokemon:PokemonEntity
}


export default class PokemonComponents extends React.Component<Props>{

    render(){

        const{pokemon} = this.props;
         if(pokemon !== undefined){
            return (
                <Container >
                    <PokemonStyle color={getPokemonColorByType(pokemon.types[0].name)}>
                        <Link to={{pathname:'/pokemon-details/', search: `?pokemon=${JSON.stringify(pokemon)}`}}>
                        <img src={`${pokemon.imageUrl}`} alt={pokemon.name}/>
                        </Link>
                        <span>{pokemon.name.toUpperCase()}</span>
                    </PokemonStyle>
                </Container>
            )
         }else{
            return(
                <div></div>
            )
         }    
    }
   
   
}