import styled from "styled-components";

export const CardGrid = styled.div`
    width: min(90%, 70rem);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: clamp(.5rem, 1vw, 1.5rem);
    /* overflow-y: scroll;l */
    margin: 1rem 0;
    border-radius: .5rem;

    @media only screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 700px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;