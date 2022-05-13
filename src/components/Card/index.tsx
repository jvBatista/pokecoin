import { useEffect, useState } from "react";
import { getPokemon } from "../../services/pokeApi";
import {
    PokemonCard,
    PokemonImage,
    TitleText
} from "./style";
import pokeballSpin from "../../assets/pokeball_spin.gif";

export interface PokemonProps {
    id: number;
    name: string;
    base_experience: number;
    sprites: {
        front_default: string;
    };
    abilities: [{
        ability:{
            name: string;
        }
    }];
    types: [{
        type:{
            name: string;
        }
    }];
}

interface CardProps {
    name: string;
    displayPokemon: (pokemon: PokemonProps) => void;
}

export function Card({ name, displayPokemon }: CardProps) {
    const [pokemon, setPokemon] = useState<PokemonProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPokemonData = async () => {
        setIsLoading(true);
        const data = await getPokemon(name);

        setPokemon(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getPokemonData();
    }, [name]);

    return (
        <PokemonCard
            typeName={pokemon?.types[0].type.name || ""}
            onClick={() => displayPokemon(pokemon || {} as PokemonProps)}
        >
            {!isLoading ? (
                <>
                    <PokemonImage src={pokemon?.sprites.front_default} />
                    <TitleText>{pokemon?.name.toUpperCase()}</TitleText>
                </>
            ) :
                <PokemonImage src={pokeballSpin} />}
        </PokemonCard>
    )
}