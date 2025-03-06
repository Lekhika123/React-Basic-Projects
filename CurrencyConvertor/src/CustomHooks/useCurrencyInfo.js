import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/d217b65b4bedc578ad041ab1/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
            
            setData(res['conversion_rates'])
            console.log("Fetched Data:", res.conversion_rates);
    })
       
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;