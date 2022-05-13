import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { getCurrentDolarValue } from "../../services/coinApi";
import { PokemonProps } from "../Card";
import { TextButton } from "../TextButton";
import {
    Background,
    Container,
    ModalContent,
    PokemonImage,
    DataSection,
    InfoRow,
    Atribute,
    AtributeLabel,
    AtributeValue,
    CloseButton,
    InfoContainer,
    ImageContainer,
    ButonContainer
} from "./style";

interface PokemonDataModalProps {
    pokemon: PokemonProps;
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    toSell?: boolean;
}

const EXP_TO_BTC = 0.00000001;

export function PokemonDataModal(
    { pokemon, setShowModal, toSell = false }: PokemonDataModalProps
) {
    const [dolarValue, setDolarValue] = useState(0);

    async function getDolarValue() {
        const amount = await getCurrentDolarValue();
        setDolarValue(amount);
    }

    function addPokemonToCollection(value: number) {
        let formatedPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            base_experience: pokemon.base_experience,
        }
        const data = sessionStorage.getItem("@pokecoin/userCollection");

        if (!data) {
            sessionStorage.setItem('@pokecoin/userCollection', JSON.stringify([formatedPokemon]));
        } else {
            const collection = JSON.parse(data);

            if (!collection) {
                sessionStorage.setItem('@pokecoin/userCollection', JSON.stringify([formatedPokemon]));
            } else {
                let newCollection: any[] = collection;
                newCollection.push(formatedPokemon);
                sessionStorage.setItem('@pokecoin/userCollection', JSON.stringify(newCollection));
            }
        }

        window.alert(`Aquisição de ${pokemon.name.toUpperCase()} por $${value.toFixed(2)} registrada com sucesso!!`);
        setShowModal(false);
    };

    function removePokemonFromCollection(value: number) {
        const data = sessionStorage.getItem("@pokecoin/userCollection");

        if (!data) {
            window.alert(`Falha ao registrar a venda. Tente novamente...`);
        } else {
            let collection = JSON.parse(data);
            console.log(collection);

            if (!collection) {
                window.alert(`Falha ao registrar a venda. Tente novamente...`);
            } else {
                const findPokemon = collection.find((element: { name: string; }) => element.name == pokemon.name);
                const index = collection.indexOf(findPokemon);

                if (index <= -1) {
                    window.alert(`Falha ao registrar a venda. Tente novamente...`);
                } else {
                    collection.splice(index, 1);
                    console.log(index, collection);
                    sessionStorage.setItem('@pokecoin/userCollection', JSON.stringify(collection));
                    window.alert(`Venda de ${pokemon.name.toUpperCase()} por $${value.toFixed(2)} registrada com sucesso!!`);
                }
            }
        }

        setShowModal(false);
    };

    function registerOperation(value: number) {
        let operation = {
            type: toSell ? "SELL" : "BUY",
            pokemon: pokemon.name,
            value,
            date: new Date()
        }
        const data = sessionStorage.getItem("@pokecoin/operationHistory");

        if (!data) {
            sessionStorage.setItem('@pokecoin/operationHistory', JSON.stringify([operation]));
        } else {
            const opHistory = JSON.parse(data);

            if (!opHistory) {
                sessionStorage.setItem('@pokecoin/operationHistory', JSON.stringify([operation]));
            } else {
                let updatedHistory: any[] = opHistory;
                updatedHistory.push(operation);
                sessionStorage.setItem('@pokecoin/operationHistory', JSON.stringify(updatedHistory));
            }
        }
    }

    function handleTradingPokemon() {
        const value = pokemon.base_experience * EXP_TO_BTC * dolarValue;
        registerOperation(value);
        if (toSell) removePokemonFromCollection(value);
        else addPokemonToCollection(value);
    }

    useEffect(() => {
        getDolarValue();
    }, []);

    return (
        <Background>
            <Container>
                <ModalContent>
                    <ImageContainer>
                        <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                    </ImageContainer>

                    <DataSection>
                        <InfoContainer>
                            <InfoRow>
                                <Atribute>
                                    <AtributeLabel>Nome :</AtributeLabel>
                                    <AtributeValue>{pokemon.name.toUpperCase()}</AtributeValue>
                                </Atribute>

                                <Atribute>
                                    <AtributeLabel>Tipo :</AtributeLabel>
                                    <AtributeValue>{`${pokemon.types[0].type.name.toUpperCase()}`}</AtributeValue>
                                </Atribute>
                            </InfoRow>

                            <InfoRow>
                                <Atribute>
                                    <AtributeLabel>Habilidades :</AtributeLabel>
                                    <AtributeValue>{pokemon.abilities[0].ability.name.toUpperCase()}</AtributeValue>
                                </Atribute>

                                {/* <Atribute>
                                    <AtributeLabel>Geração :</AtributeLabel>
                                    <AtributeValue>{pokemon.name}</AtributeValue>
                                </Atribute> */}
                                <Atribute>
                                    <AtributeLabel>Exp. Base :</AtributeLabel>
                                    <AtributeValue>{`${pokemon.base_experience} pts`}</AtributeValue>
                                </Atribute>
                            </InfoRow>

                            <InfoRow>
                                <Atribute>
                                    <AtributeLabel>Valor BTC :</AtributeLabel>
                                    <AtributeValue>{`${Number(pokemon.base_experience * EXP_TO_BTC).toFixed(8)} BTC`}</AtributeValue>
                                </Atribute>

                                <Atribute>
                                    <AtributeLabel>Valor estimado USD :</AtributeLabel>
                                    <AtributeValue>{`$ ${Number(pokemon.base_experience * EXP_TO_BTC * dolarValue).toFixed(8)}`}</AtributeValue>
                                </Atribute>
                            </InfoRow>
                        </InfoContainer>

                        <ButonContainer>
                            <TextButton text={toSell ? "VENDER" : "OBTER"} buttonFunction={handleTradingPokemon} />
                        </ButonContainer>
                    </DataSection>
                </ModalContent>

                <CloseButton onClick={() => setShowModal(false)}>
                    <X size={24} />
                </CloseButton>
            </Container>
        </Background>
    );
}