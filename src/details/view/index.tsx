
import React from "react";
import { Container, HpText, Details, LeftAlign, CenterAlign, RightAlign, PokemonStyle } from "./style";

import PokemonEntity from "../../pokemon-list/model/pokemon-entity";
import { getPokemonColorByType } from "../../utils/pokemon-colors-util";

interface Props{
    pokemon: PokemonEntity;
}

export default class  PokemonDetailsView extends React.Component<Props>{
    pokemon: any;
   
   
    render(){
        const {pokemon} = this.props;

        if(pokemon != undefined){
            return(    
            
            <Container color={getPokemonColorByType(pokemon.types[0].name)}>

                    <PokemonStyle >
                        <img src={pokemon.imageUrl} alt={pokemon.name}/>
                        <span className="pokemon-name">{pokemon.name}</span >
                        <hr />
                        <HpText>{`HP ${pokemon.hp}`}</HpText>
                        <Details>
                            <LeftAlign>
                                <h4>Habilidades</h4>
                                {
                                    pokemon.abilities.map(ability=>{
                                        return(
                                            <p><span>{ability.name}</span></p>
                                        )
                                    })
                                }
                            </LeftAlign>
                            <CenterAlign>
                                <h4>Localização</h4>
                                {
                                    pokemon.locations.map(location=>{
                                        return(
                                            <p><span>{location.name}</span></p>
                                        )
                                    })
                                }
                            </CenterAlign>
                            <RightAlign>
                                <h4>Tipo</h4>
                                {
                                    pokemon.types.map(type=>{
                                        return(
                                            <p><span>{type.name}</span></p>
                                        )
                                    })
                                }
                            </RightAlign>
                        </Details>
                    </PokemonStyle>
                </Container>
            )
        }else{
            return <div></div>

        }
  
    }
   
}