import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';

export function Chart(){

    const [data, setData] = useState({})
    const [symbol, setSymbol] = useState("QQQ")
    const [stock, setStock] = useState('');
    const [option, setOption] = useState("TIME_SERIES_DAILY");
    const options =  ["TIME_SERIES_DAILY","TIME_SERIES_INTRADAY","TIME_SERIES_WEEKLY"]
    

    useEffect(function (){
        let url = `https://www.alphavantage.co/query?function=${option}&symbol=${symbol}&interval=60min&apikey=GQ5LJWWQEK24SZE7`
        console.log(url)

        console.log(option === options[2] ? "Weekly Time Series" 
        : option === options[1] ? "Time Series (60min)" : "Time Series (Daily)")

        fetch(url)
            .then(res => res.json())
            .then(data => {setData(data[option === options[2] ? "Weekly Time Series" 
            : option === options[1] ? "Time Series (60min)" : "Time Series (Daily)"])
                            console.log(data) }                
            )

        console.log(data)
        
    }, [symbol])

    


    const timeList = Object.keys(data);
    const chartData = [];
    timeList.forEach(time => {
        chartData.push(data[time]["4. close"])
    })

    // const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=60min&apikey=HGJWFG4N8AQ66ICD"

    function toggleButton(event){
        event.preventDefault()
        setSymbol(stock.toUpperCase())
    }

    const genOptions = options.map(element => {
        return (
            <div>
                <input type='radio' id={element}
                    name="choice" value={element}
                    checked={option === element} 
                    onChange={() => {
                        setOption(element)
                    }}
                />
                <label htmlFor={element} className={element}>
                    {element}
                </label>
            </div>
        )
    })

    return (
        <div>
            <h1>{symbol} Stock Chart</h1>
            {genOptions}
            {Object.keys(data).length > 0 ? (
                <div>
                <Plot
                    data={[
                        {
                            x: timeList,
                            y: chartData,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        }
                    ]}
                    layout={{ width: 720, height: 440, title: 'Stock Chart' }}
                />
                
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <form>
                <input
                    type="text"
                    placeholder='Stock Name'
                    name="stock"
                    value={stock}
                    onChange={(e) => (setStock(e.target.value))}
                ></input>
                <button
                    onClick={toggleButton}
                >Search for stock</button>
            </form>
        </div>
    )


 }