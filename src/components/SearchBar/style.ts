import styled from "styled-components";

export const TextInput = styled.input`
    width: 60%;
    border: none;
    border-radius: 1rem;
    box-shadow: inset 0px 1px 3px #00000050;
    padding: .3rem 1.5rem;
    font-weight: 500;
    font-size: 1rem;
    outline: none;
    background: ${({ theme }) => theme.colors.primary100};
    color: ${({ theme }) => theme.colors.primary700};
`;