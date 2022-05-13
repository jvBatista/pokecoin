import styled from "styled-components";
import { TextButton } from "../TextButton";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: 0 0;
`;

export const Container = styled.div`
    width: min(800px, 90%);
    height: min(500px, 50vh);
    box-shadow: 0 5px 16px rgba(0,0,0,0.4);
    background: ${({theme}) => theme.colors.primary100};
    position: relative;
    z-index: 10;
    border-radius: 1rem;
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
`;

export const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokemonImage = styled.img`
    width: 75%;
`;

export const DataSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    background: ${({theme}) => theme.colors.primary700};
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 1rem;
`;

export const InfoRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Atribute = styled.div`
    display: flex;
    margin: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const AtributeLabel = styled.div`
    color: ${({theme}) => theme.colors.on_primary};
`;

export const AtributeValue = styled.div`
    color: ${({theme}) => theme.colors.secondary500};
    margin-top: .25rem;
    letter-spacing: 2px;
`;

export const ButonContainer = styled.div`
    width: 90%;
    display: flex;
    margin: 1rem;
    justify-content: flex-end;
    align-items: center;
`;

export const CloseButton = styled.div`
    color: ${({theme}) => theme.colors.secondary500};
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0;
    z-index: 10;
`;