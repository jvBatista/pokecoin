import styled from "styled-components";

export const Button = styled.button`
    width: clamp(1.5rem, 4vw, 4rem);
    height: clamp(1.5rem, 4vw, 4rem);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.colors.primary700};
    color: ${({ theme }) => theme.colors.secondary500};
    cursor: pointer;
    transition: 100ms;

    :hover{
        color: ${({ theme }) => theme.colors.on_primary};
        background: ${({ theme }) => theme.colors.secondary500};
    }
`;