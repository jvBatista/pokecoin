import styled from "styled-components";

export const CardGrid = styled.div`
    width: min(90%, 70rem);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    /* overflow-y: scroll;l */
    margin: 1rem 0;
    border-radius: .5rem;
`;