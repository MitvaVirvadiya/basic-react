import { useState } from 'react'
import { Input } from './components'
import useCurrency from './hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrency(from)

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg')`,
          }}
          >
          <div className="w-full flex">
              <div className="w-full flex max-w-xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <div className="w-48 flex-none relative bg-cover bg-no-repeat bg-center rounded-md" 
                    style={{
                      backgroundImage: `url('https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    }}>
                </div>
                <form 
                    className='flex-auto p-3'
                    onSubmit={(e) => {
                      e.preventDefault();
                      convert();
                    }}
                    >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
              </div>
          </div>
      </div>
);
}

export default App
