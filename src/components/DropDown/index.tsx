import { useState } from "react";
import { Container } from "../DolarStatus/style";
import { TextButton } from "../TextButton"
import { OptionListItem, OptionsContainer, OptionList } from "./style";

interface DropDownProps {
    text: string;
    options: any[];
    onSelect: (option: any) => void;
}

export function DropDown({ text, options, onSelect }: DropDownProps) {
    const [showOptions, setShowOptions] = useState(false);

    const Options = () => {
        return (
            <>
                {
                    options.map((option) => {
                        return (
                            <OptionListItem
                                style={{ outline: "none" }}
                                onClick={() => {
                                    onSelect(option)
                                    setShowOptions(false)
                                }}
                                key={option.name}
                            >
                                {option.name.toUpperCase()}
                            </OptionListItem>
                        );
                    })
                }
            </>
        )
    };

    return (
        <Container>
            <TextButton text={text} buttonFunction={() => setShowOptions(prev => !prev)} />
            {
                showOptions && (
                    <OptionsContainer>
                        <OptionList>
                            <Options />
                        </OptionList>
                    </OptionsContainer>
                )
            }
        </Container>
    )
}