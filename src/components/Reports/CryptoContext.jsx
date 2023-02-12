import React,{useContext,createContext,useState, useEffect} from 'react'

const Crypto  = createContext();

const CryptoContext = ({children}) => {
 
    const [currency, setCurrency] = useState("USD")
    const [symbol, setSymbol] = useState("$")

    useEffect(() => {
      if(currency==="USD") setSymbol("$")
      else if(currency==="ARS") setSymbol("ARS")
    }, [currency])
    

    // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <Crypto.Provider value={[currency, setCurrency, symbol]}>
        {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto)
}