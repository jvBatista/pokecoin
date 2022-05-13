import styled from "styled-components";

export const Button = styled.button`
    font-size: clamp(.75rem, 1.25vw, 1.2rem);
    font-weight: 500;
    border: none;
    border-radius: 1rem;
    padding: .25rem .75rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary500};
    background: ${({ theme }) => theme.colors.primary700};
    margin: .5rem 0;
    transition: 100ms;

    :hover{
        color: ${({ theme }) => theme.colors.on_primary};
        background: ${({ theme }) => theme.colors.secondary500};
    }
`;