import { useEffect, useState } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((e) => e.json())
        .then((e) => setData(e[currency]))
        console.log(data)
    }, [currency])
    console.log(data);
    return data
}

export default useCurrency;