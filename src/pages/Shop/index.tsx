import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DolarStatus } from "../../components/DolarStatus";
import { PokemonDataModal } from "../../components/PokemonDataModal";
import { SearchBar } from "../../components/SearchBar";
import { Grid } from "../../components/Grid";
import { getGenInfo, getPokemonList } from "../../services/pokeApi";
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
import { DropDown } from "../../components/DropDown";

export interface PokedexEntryProps {
    name: string;
    url: string;
}

const gens = [
    {
        name: "Gen I",
        id: 1
    },
    {
        name: "Gen II",
        id: 2
    },
    {
        name: "Gen III",
        id: 3
    },
    {
        name: "Gen IV",
        id: 4
    },
    {
        name: "Gen V",
        id: 5
    },
    {
        name: "Gen VI",
        id: 6
    },
    {
        name: "Gen VI",
        id: 6
    },
    {
        name: "Gen VI",
        id: 6
    },
];

export function Shop() {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [pokedex, setPokedex] = useState<PokedexEntryProps[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonProps>({} as PokemonProps);

    const [generations, setGenerations] = useState<PokedexEntryProps[]>([]);
    const [selectedGeneration, setSelectedGeneration] = useState<PokedexEntryProps>();

    const navigate = useNavigate();

    const getGenerationListData = async () => {
        setIsLoading(true);
        const data = await getGenInfo("");

        setGenerations(data);
        setSelectedGeneration(data[0]);
        setIsLoading(false);
    };

    const getPokemonListData = async (genId: string) => {
        setIsLoading(true);
        const data = await getGenInfo(genId);

        setPokedex(data);
        setIsLoading(false);
    };

    function displayPokemonModal(pokemon: PokemonProps) {
        setSelectedPokemon(pokemon);
        setShowModal(true);
    }

    function updateGeneration(option: any) {
        setSelectedGeneration(option);
        getPokemonListData(option.name);
    }

    function sortById(a: PokedexEntryProps, b: PokedexEntryProps) {
        const aId = Number(a.url.replace("https://pokeapi.co/api/v2/pokemon-species/", "").replace("/", ""));
        const bId = Number(b.url.replace("https://pokeapi.co/api/v2/pokemon-species/", "").replace("/", ""));

        return aId - bId;
    }

    useEffect(() => {
        getGenerationListData();
        getPokemonListData("1");
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
                        <DropDown
                            text={selectedGeneration?.name.toUpperCase() || ""}
                            options={generations}
                            onSelect={updateGeneration}
                        />
                    </SearchSection>
                </CenterSection>

                {
                    pokedex.filter(pokemon => {
                        if (!query || pokemon.name.toLowerCase().includes(query.toLowerCase().trim())) return pokemon;
                    }).length ? (
                        <>
                            {
                                !isLoading ?
                                    <Grid
                                        displayPokemon={displayPokemonModal}
                                        pokemonList={pokedex
                                            .sort(sortById)
                                            .filter(pokemon => {
                                                if (!query || pokemon.name.toLowerCase().includes(query.toLowerCase().trim())) return pokemon;
                                            })

                                        }
                                    /> : (<Loading />)
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