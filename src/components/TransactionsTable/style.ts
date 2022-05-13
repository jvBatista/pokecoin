import styled from 'styled-components';

export const Container = styled.div`
    width: min(95%, 60rem);
    margin-top: 3vh;
`;

export const Table = styled.table`
    height: 30%;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* border: 2px solid ${({ theme }) => theme.colors.primary700}; */
    color: ${({ theme }) => theme.colors.on_primary};
    border-radius: 1rem;

    /* tr {
        border-collapse: collapse;
    } */

    tr:nth-child(odd){ 
		background: ${({ theme }) => theme.colors.primary700};
	}

	tr:nth-child(even){
		background: ${({ theme }) => theme.colors.primary500};
	}

    tr td {
        padding: 1rem;
        /* border-top: 2px solid #d7dadd;
        border-left: 2px solid #d7dadd; */
        text-align: center;
        font-weight: 500;
    }

    td {
        /* display: flex; */
        align-items: center;
    }

    td:first-child {
        color: ${({ theme }) => theme.colors.secondary500};
    }

    tr:last-child td:first-child {
        border-bottom-left-radius: 10px;
    }
    
    tr:last-child td:last-child {
        border-bottom-right-radius: 10px;
    }

    tr:first-child td:first-child {
        color: ${({ theme }) => theme.colors.on_primary};
        border-top-left-radius: 10px;
    }
    
    tr:first-child td:last-child {
        border-top-right-radius: 10px;
    }
`;



