// const fetchCurrencyData = async () => {
//     const url = `https://api.coinbase.com/v2/prices/spot?currency=USD`;

//     const data = await fetch(url);
//     const currencyData = await data.json();

//     console.log(currencyData.data.amount);
//     setDolarValue(Number(currencyData.data.amount));
// }

export async function getCurrentDolarValue() {
    const url = `https://api.coinbase.com/v2/prices/spot?currency=USD`;

    const data = await fetch(url);
    const currencyData = await data.json();

    console.log(currencyData.data.amount);
    return (Number(currencyData.data.amount));
}