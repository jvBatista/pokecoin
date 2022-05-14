import { PokedexEntryProps } from "../../pages/Shop";
import { Card, PokemonProps } from "../Card";
import {
    CardGrid
} from "./style";

interface GridProps {
    pokemonList: PokedexEntryProps[] | [{
        name: string;
    }];
    displayPokemon: (pokemon: PokemonProps) => void;
}

export function Grid({ pokemonList, displayPokemon }: GridProps) {
    return (
        <CardGrid>
            {
                pokemonList.map((pokemon, index) => {
                    return (
                        <Card 
                            name={pokemon.name}
                            key={index}
                            displayPokemon={displayPokemon}
                        />
                    )
                })}
        </CardGrid>
    )
}