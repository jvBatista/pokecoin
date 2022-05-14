import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DolarStatus } from "../../components/DolarStatus";
import {
    CenterSection,
    Container,
    HomeSubTitle,
    HomeText,
    TopSection
} from "./style";
import { CircleButton } from "../../components/CircleButton";
import { Loading } from "../../components/Loading";
import { TransactionTable } from "../../components/TransactionsTable";
import api from "../../services/api";

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

    async function getTransactionHistory() {
        setIsLoading(true);
        try {
            const res = await api.get("/trade");

            setTransactionList(res.data);
        } catch (error) {
            console.log(error);
            window.alert("Falha ao recuperar histórico de transações. Tente novamente...");
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