import styled from "styled-components"

export const OptionList = styled.div`
    width: 100%;
    box-shadow: inset 0px 1px 3px #00000050;
    background-color: ${({ theme }) => theme.colors.primary700};
    border-radius: 10px;
    position: absolute;
    overflow: hidden;
`

export const OptionListItem = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    border: none;
    padding: .5rem 1.5rem;
    background: transparent;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary500};

    :hover{
        background: ${({ theme }) => theme.colors.primary100};
        cursor: pointer;
    }
`

export const OptionsContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.primary700};
    position:relative;
    border-radius: 10px;
`