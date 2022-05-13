import { Button } from "./style";

interface TextButtonProps {
    text: string;
    buttonFunction: () => void;
}

export function TextButton({ text, buttonFunction }: TextButtonProps) {
    return (
        <Button onClick={buttonFunction}>{text}</Button>
    )
}