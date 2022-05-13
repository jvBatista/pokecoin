import styled from "styled-components";

interface PokemonTypes {
    typeName: string;
}

export const types = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#FFAEC9"
}

export const PokemonCard = styled.button<PokemonTypes>`
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid ${({ typeName }: PokemonTypes) => types[typeName as keyof typeof types]};
    border-radius: .5rem;
    background: ${({ theme }) => theme.colors.primary700};
    color: ${({ theme, typeName }) => typeName ? types[typeName as keyof typeof types] : theme.colors.secondary500};
    aspect-ratio: 4/5;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
    transition: 250ms;

    .span{
        font-size: clamp(.75rem, 1rem, 1.2rem);
        font-weight: 900;
        letter-spacing: 1px;
        margin-bottom: 5%;
    }

    :hover{
        transform: scale(1.1);
    }
`;

export const PokemonImage = styled.img`
    width: 95%;
`;

export const TitleText = styled.div`
    font-size: clamp(.75rem, 1rem, 1.2rem);
    font-weight: 900;
    letter-spacing: 2px;
    margin-bottom: 5%;
`;