import styled from "styled-components";

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

    @media only screen and (max-width: 850px) {
        width: min(500px, 90%);
        height: min(800px, 50vh);
    }
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: clamp(.8rem, 1vw, 1.25rem);

    @media only screen and (max-width: 850px) {
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
    }
`;

export const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 850px) {
        height: 50%;
    }
`;

export const PokemonImage = styled.img`
    width: min(100%, 25rem);
`;

export const DataSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    background: ${({theme}) => theme.colors.primary700};

    @media only screen and (max-width: 850px) {
        height: 50%;
        width: 100%;
    }
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
    margin: 1vh;
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
    margin: 1vh;
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