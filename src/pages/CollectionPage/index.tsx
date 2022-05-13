import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DolarStatus } from "../../components/DolarStatus";
import { PokemonDataModal } from "../../components/PokemonDataModal";
import { SearchBar } from "../../components/SearchBar";
import { Grid } from "../../components/Grid";
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
import { getCurrentDolarValue } from "../../services/coinApi";
import { PokemonProps } from "../../components/Card";
import { stringify } from "querystring";
import { Loading } from "../../components/Loading";

export function CollectionPage() {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [collection, setCollection] = useState([]);
    const [dolarValue, setDolarValue] = useState(0);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonProps>({} as PokemonProps);
    const navigate = useNavigate();

    function displayPokemon(pokemon: PokemonProps) {
        setSelectedPokemon(pokemon);
        setShowModal(true);
    }

    const getCollectionValue = async () => {
        const data = sessionStorage.getItem("@pokecoin/userCollection") || "";
        const currentCollection = JSON.parse(data);
        setCollection(currentCollection);
    };

    useEffect(() => {
        getCollectionValue();
    }, []);

    return (
        <>
            {showModal && <PokemonDataModal toSell={true} showModal={showModal} setShowModal={setShowModal} pokemon={selectedPokemon} />}
            <Container>
                <TopSection>
                    <CircleButton
                        icon="back"
                        buttonFunction={() => navigate("/")}
                    />

                    <DolarStatus />
                </TopSection>

                <CenterSection>
                    <HomeSubTitle>MINHA COLEÇÃO</HomeSubTitle>
                    <HomeText>selecione o pokémon a ser vendido</HomeText>
                    <SearchSection>
                        <SearchBar inputValue={query} setInputValue={setQuery} />
                        {/* <TextButton text="Pesquisar" buttonFunction={() => { }} /> */}
                    </SearchSection>
                </CenterSection>

                {
                    collection.filter((pokemon: { name: string; }) => {
                        if (!query || pokemon.name.toLowerCase().includes(query.toLowerCase().trim())) return pokemon;
                    }).length ? (
                        <>
                            {
                                !isLoading ? <Grid displayPokemon={displayPokemon} pokemonList={collection.filter((pokemon: { name: string; }) => {
                                    if (!query || pokemon.name.toLowerCase().includes(query.toLowerCase().trim())) return pokemon;
                                })} /> :  (<Loading/>)
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