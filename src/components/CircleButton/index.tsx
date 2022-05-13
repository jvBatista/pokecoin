import { ArrowUUpLeft, Coins, House, ShoppingCartSimple, Wallet } from "phosphor-react";
import {
    Button,
} from "./style";

interface CircleButtonProps {
    icon: string;
    buttonFunction: () => void;
}

export function CircleButton({ icon, buttonFunction }: CircleButtonProps) {
    function Icon() {
        if (icon === "shop") return <ShoppingCartSimple size={32} />;
        else if (icon === "sell") return <Coins size={32} />;
        else if (icon === "back") return <ArrowUUpLeft size={32} />;
        else if (icon === "collection") return <Wallet size={32} />;
        else return <House size={32} />
    }

    return (
        <Button onClick={buttonFunction}>
            <Icon />
        </Button>
    )
}