import { useEffect, useState } from "react"
import { getCurrentDolarValue } from "../../services/coinApi"
import { TextButton } from "../TextButton";
import {
    Container,
    Text
} from "./style";

export function DolarStatus() {
    const [currentValue, setCurrentValue] = useState(0);

    async function getDolarValue(){
        const amount = await getCurrentDolarValue();
        setCurrentValue(amount);
    }

    useEffect(() => {
        getDolarValue();
    }, []);

    return (
        <Container>
            <Text>1 EXP_PT = 0.00000001 BTC </Text>
            <Text> {`1 BTC ~= ${currentValue} USD`} </Text>
            <TextButton text="Atualizar" buttonFunction={getDolarValue} />
        </Container>
    );
}