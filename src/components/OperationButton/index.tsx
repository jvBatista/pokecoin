import { Coins, House, Notepad, ShoppingCartSimple, Wallet } from "phosphor-react";
import {
    Button,
    ButtonText,
    Container
} from "./style";

interface OperationButtonProps {
    operation: string;
    text: string;
    buttonFunction: () => void;
}

export function OperationButton({ operation, text, buttonFunction }: OperationButtonProps) {
    function Icon() {
        if (operation === "shop") return <ShoppingCartSimple size={120} />;
        else if (operation === "sell") return <Coins size={120} />;
        else if (operation === "history") return <Notepad size={120} />;
        else if (operation === "collection") return <Wallet size={120} />;
        else return <House size={120} />
    }

    return (
        <Container>
            <Button onClick={buttonFunction}>
                <Icon/>
            </Button>
            <ButtonText>{text}</ButtonText>
        </Container>
    )
}