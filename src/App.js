
import { useState, useEffect } from "react";

// Input 컴포넌트
function UsdToCoin({selectCoin}) {
  const[amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  }
  const reset = () => setAmount(0);
  const onInvert = () => {
      reset();
      setInverted((current) => !current);
  }

  // selectCoint이 변경되면 리셋실행
  useEffect(() => {reset();}, [selectCoin]);

  return (
    <div>
      <div>
        <label htmlFor="USD">U S D : </label>
        <input 
          value={inverted ? amount * selectCoin.quotes.USD.price : amount}
          id="USD" 
          placeholder="USD" 
          type="number" 
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="coin">Count : </label>
        <input 
          value={inverted ? amount : amount / selectCoin.quotes.USD.price}
          id="coin" 
          placeholder="Coin" 
          type="number"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Money" : "Coin"}</button>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState(undefined);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => setSelectCoin(coins[event.target.value]);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
          <strong>Loading....</strong>
        ) : (
          <div>
            <select onChange={onChange}>
            <option value={-1} key={-1}>Please select coin</option>
              {coins.map((coin, index) => 
                <option value={index} key={index}>
                  {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                </option>)
              }
            </select>
            <hr />
            {selectCoin === undefined ? null : <UsdToCoin selectCoin={selectCoin}/>}
          </div>
          
        )
      }
      
    </div>
  );
}


export default App;
