import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DolarStatus } from "../../components/DolarStatus";
import { PokemonDataModal } from "../../components/PokemonDataModal";
import { SearchBar } from "../../components/SearchBar";
import { Grid } from "../../components/Grid";
import { getPokemonList } from "../../services/pokeApi";
import {
    CenterSection,
    SearchSection,
    Container,
    HomeSubTitle,
    HomeText,
    HomeTitle,
    TopSection
} from "./style";
import { CircleButton } from "../../components/CircleButton";
import { TextButton } from "../../components/TextButton";
import { PokemonProps } from "../../components/Card";
import { Loading } from "../../components/Loading";

export interface PokedexEntryProps {
    name: string;
    url: string;
}

export function Shop() {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pokedex, setPokedex] = useState<PokedexEntryProps[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonProps>({} as PokemonProps);
    const navigate = useNavigate();

    const fetchNewPokemonData = async () => {
        setIsLoading(true);
        const data = await getPokemonList();
        console.log(data);

        setPokedex(data);
        setIsLoading(false);
    };

    function displayPokemon(pokemon: PokemonProps) {
        setSelectedPokemon(pokemon);
        setShowModal(true);
    }

    useEffect(() => {
        fetchNewPokemonData();
    }, []);

    return (
        <>
            {showModal && <PokemonDataModal showModal={showModal} setShowModal={setShowModal} pokemon={selectedPokemon} />}
            <Container>
                <TopSection>
                    <CircleButton
                        icon="back"
                        buttonFunction={() => navigate("/")}
                    />

                    <DolarStatus />
                </TopSection>

                <CenterSection>
                    <HomeSubTitle>TRADE CENTER</HomeSubTitle>
                    <HomeText>selecione o pokémon a ser adquirido</HomeText>
                    <SearchSection>
                        <SearchBar inputValue={query} setInputValue={setQuery} />
                        <TextButton text="Pesquisar" buttonFunction={() => { }} />
                    </SearchSection>
                </CenterSection>

                {
                    pokedex.filter(pokemon => {
                        if (!query || pokemon.name.toLowerCase().includes(query.toLowerCase().trim())) return pokemon;
                    }).length ? (
                        <>
                            {
                                !isLoading ? <Grid displayPokemon={displayPokemon} pokemonList={pokedex.filter(pokemon => {
                                    if (!query || pokemon.name.toLowerCase().includes(query.toLowerCase().trim())) return pokemon;
                                })} /> : (<Loading />)
                            }
                        </>
                    ) : (
                        <HomeText>Não encontramos nenhum resultado...</HomeText>
                    )
                }
            </Container>
        </>
    )
}