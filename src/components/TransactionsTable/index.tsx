import { ArrowsDownUp } from "phosphor-react";
import { TransactionList } from "../../pages/History";
import { Container, Table } from "./style";

interface TransactionTableProps {
    transactionList: TransactionList[],
}

export function TransactionTable({ transactionList }: TransactionTableProps) {
    return (
        <Container>
            <Table cellSpacing={0} cellPadding={0}>
                <tbody>
                    <tr>
                        <td>
                            Operação
                        </td>
                        <td>
                            Pokémon
                        </td>
                        <td>
                            Valor
                        </td>
                        <td>
                            Data
                        </td>
                    </tr>

                    {transactionList.map((row, index) => (
                        <tr key={index}>
                            <td style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem", color: row.type == "BUY" ? '#F50057' : '#78C850' }}>
                                <ArrowsDownUp size={24} />
                                {row.type}
                            </td>
                            <td>
                                {row.pokemon.toUpperCase()}
                            </td>
                            <td style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem", color: row.type == "BUY" ? '#F50057' : '#78C850' }}>
                                <ArrowsDownUp size={24} />
                                {`$ ${row.value.toFixed(8)}`}
                            </td>
                            <td>
                                {/* {`${row.date.getDate()}/${row.date.getMonth()+1}/${row.date.getFullYear()}`} */}
                                {`${new Date(row.date).getDate().toString().padStart(2, '0')}/${(new Date(row.date).getMonth()+1).toString().padStart(2, '0')}/${new Date(row.date).getFullYear()}`}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}