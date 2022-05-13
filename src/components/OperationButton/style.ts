import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: clamp(5rem, 15vw, 15rem);
    height: clamp(5rem, 15vw, 15rem);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.colors.primary700};
    color: ${({ theme }) => theme.colors.secondary500};
    cursor: pointer;
    transition: 250ms;

    :hover{
        transform: scale(1.05);
    }
`;

export const ButtonText = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 1.25rem;
    color: ${({ theme }) => theme.colors.primary100};
`;