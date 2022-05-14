import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import api from "../../services/api";
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

    async function addPokemonToCollection(value: number) {
        try {
            await api.post("/pokemon/", {
                pokemonId: pokemon.id,
                name: pokemon.name,
                base_experience: pokemon.base_experience,
                value,
            });

            window.alert(`Aquisição de ${pokemon.name.toUpperCase()} por $${value.toFixed(2)} registrada com sucesso!!`);
        } catch (error) {
            console.log(error);
            window.alert("Falha ao efetuar operação. Tente novamente...");
        }
        setShowModal(false);
    };

    async function removePokemonFromCollection(value: number) {
        try {
            const res = await api.get(`/pokemon/?name=${pokemon.name}`);

            await api.delete(`/pokemon/${res.data[0]._id}`);

            window.alert(`Venda de ${pokemon.name.toUpperCase()} por $${value.toFixed(2)} registrada com sucesso!!`);
        } catch (error) {
            console.log(error);
            window.alert("Falha ao efetuar operação. Tente novamente...");
        }

        setShowModal(false);
    };

    async function registerOperation(value: number) {
        try {
            await api.post("/trade/", {
                type: toSell ? "SELL" : "BUY",
                pokemon: pokemon.name,
                value,
                date: new Date()
            });

            window.location.reload();
        } catch (error) {
            console.log(error);
            window.alert("Falha ao efetuar operação. Tente novamente...");
        }
    }

    function handleTradingPokemon() {
        const value = pokemon.base_experience * EXP_TO_BTC * dolarValue;
        if (toSell) removePokemonFromCollection(value);
        else addPokemonToCollection(value);
        registerOperation(value);
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