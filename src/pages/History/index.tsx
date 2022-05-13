import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DolarStatus } from "../../components/DolarStatus";
import { PokemonDataModal } from "../../components/PokemonDataModal";
import { SearchBar } from "../../components/SearchBar";
import { Grid } from "../../components/Grid";
import { getPokemonList } from "../../services/pokeApi";
import {
    CenterSection,
    SearchSection,
    Container,
    HomeSubTitle,
    HomeText,
    HomeTitle,
    TopSection
} from "./style";
import { CircleButton } from "../../components/CircleButton";
import { Loading } from "../../components/Loading";
import { TransactionTable } from "../../components/TransactionsTable";

export interface TransactionList {
    type: "SELL" | "BUY",
    pokemon: string,
    value: number,
    date: Date
}

export function History() {
    const [transactionList, setTransactionList] = useState<TransactionList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function getTransactionHistory() {
        setIsLoading(true);
        const data = sessionStorage.getItem("@pokecoin/operationHistory");

        if (!data) {
            console.log("lista vazia");
        } else {
            const opHistory = JSON.parse(data);

            setTransactionList(opHistory);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getTransactionHistory();
    }, []);

    return (
        <Container>
            <TopSection>
                <CircleButton
                    icon="back"
                    buttonFunction={() => navigate("/")}
                />

                <DolarStatus />
            </TopSection>

            <CenterSection>
                <HomeSubTitle>HISTÓRICO</HomeSubTitle>
                <HomeText>acompanhe suas transações passadas</HomeText>

            </CenterSection>
            {
                transactionList.length ? (
                    <>
                        {
                            !isLoading ? <TransactionTable transactionList={transactionList} /> : <Loading />
                        }
                    </>
                ) : (
                    <HomeText>Não encontramos nenhum resultado...</HomeText>
                )
            }

        </Container>
    )
}