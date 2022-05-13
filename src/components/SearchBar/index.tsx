import {
    TextInput
} from "./style";

interface SearchBarProps {
    inputValue: string;
    setInputValue: (input: string) => void;
}

export function SearchBar({ inputValue, setInputValue }: SearchBarProps) {
    return (
        <TextInput
            value={inputValue}
            placeholder="Digite o nome do pokemon..."
            onChange={e => setInputValue(e.target.value)}
        />
    )
}