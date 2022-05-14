import { CurrencyBtc } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from 'react-countup';
import { OperationButton } from "../../components/OperationButton";
import { DolarStatus } from "../../components/DolarStatus";
import { getCurrentDolarValue } from "../../services/coinApi";
import {
    CenterSection,
    Container,
    HomeSubTitle,
    HomeText,
    HomeTitle,
    OperationsContainer,
    TopSection
} from "./style";
import api from "../../services/api";

const EXP_TO_BTC = 0.00000001;

export function Home() {
    const [collectionValue, setCollectionValue] = useState(0);
    const [dolarValue, setDolarValue] = useState(0);
    const navigate = useNavigate();

    const getCollectionValue = async () => {
        const amount = await getCurrentDolarValue();
        setDolarValue(amount);

        try {
            const res = await api.get("/pokemon");

            let currentCollectionValue = 0;
            res.data.forEach((element: { base_experience: number; }) => currentCollectionValue += element.base_experience)
            setCollectionValue(currentCollectionValue);
        } catch (error) {
            console.log(error);
            window.alert("Falha ao recuperar dados da conta. Tente novamente...");
        }

    };

    useEffect(() => {
        getCollectionValue();
    }, []);

    return (
        <Container>
            <TopSection>
                <DolarStatus updateDolarValue={setDolarValue} />
            </TopSection>

            <CenterSection>
                <HomeSubTitle>MINHA CARTEIRA</HomeSubTitle>
                <HomeTitle>
                    <CountUp end={collectionValue * EXP_TO_BTC} duration={1} decimals={8} />
                    <CurrencyBtc size={72} />
                </HomeTitle>

                <HomeText>
                    (~ $
                    <CountUp end={collectionValue * EXP_TO_BTC * dolarValue} duration={1} decimals={8} />
                    )
                </HomeText>
            </CenterSection>

            <OperationsContainer>
                <OperationButton
                    operation="shop"
                    text="Registrar Aquisição"
                    buttonFunction={() => navigate("/trade")}
                />

                <OperationButton
                    operation="sell"
                    text="Registrar Venda"
                    buttonFunction={() => navigate("/sell")}
                />

                <OperationButton
                    operation="history"
                    text="Histórico de Operações"
                    buttonFunction={() => navigate("/history")}
                />
            </OperationsContainer>


        </Container>
    )
}