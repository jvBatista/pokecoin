import axios from "axios";

interface PokemonFilteredListProps {
    pokemon_species: [{
        name: string;
        url: string;
    }]
}

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

export async function getPokemonList() {
    try {
        const res = await api.get(`/pokemon/?offset=0&limit=151`);

        return res.data.results;
    } catch (error) {
        return false;
    }
};

export async function getPokemon(pokemonId: number | string) {
    try {
        const res = await api.get(`/pokemon/${pokemonId}`);

        return res.data;
    } catch (error) {
        return false;
    }
};

export async function getTypeInfo(typeId: number | string) {
    try {
        const res = await api.get(`/type/${typeId}`);

        return res.data.pokemon;
    } catch (error) {
        return false;
    }
};

export async function getGenInfo(genId: number | string) {
    try {
        const res = await api.get(`/generation/${genId}`);

        return res.data.pokemon_species;
    } catch (error) {
        return false;
    }
};