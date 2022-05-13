export async function getCurrentDolarValue() {
    const url = `https://api.coinbase.com/v2/prices/spot?currency=USD`;

    const data = await fetch(url);
    const currencyData = await data.json();

    return (Number(currencyData.data.amount));
}