import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.colors.primary500};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    text-align: center;
`;

export const TopSection = styled.div`
    display: flex;
    width: 98%;
    justify-content: space-between;
    margin: 1rem 0;
`;

export const CenterSection = styled.div`
    width: max(60%, 22.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
    margin-bottom: 3vh;
`;

export const SearchSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
    gap: 1vw;
`;

export const HomeTitle = styled.div`
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeSubTitle = styled.div`
    font-size: clamp(1.5rem, 3.5vw, 3.5rem);
    font-weight: 900;
    letter-spacing: .75vw;
    margin-top: .5vh;
    margin-bottom: 1.5vh;
`;

export const HomeText = styled.div`
    font-size: clamp(1.5rem, 2vw, 1.75rem);
    font-weight: 500;
`;