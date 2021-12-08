function App(){
    
    const [quotes,setQuotes] = React.useState([]);
    const [randomQuote,setRandomQuote] = React.useState([]);
    const [randomColor,setRandomColor] = React.useState("#dddec3");
    React.useEffect(() => {
       async function fetchData(){
           const response = await fetch("https://type.fit/api/quotes")
           const data = await response.json();
           
           setQuotes(data);
           let randomIndex = Math.floor(Math.random() * data.length);
           setRandomQuote(data[randomIndex])
       }
       fetchData();
    }, [])
    const getNewQuote = () =>{
        const colors = [
            "#ff6f61",
            "#4169e1",
            "#d5d5d7",
            "#ff43a4",
            "#fffa9c"
        ]
        let randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex])
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        setRandomColor(colors[randomColorIndex])
    }
    return(
    <div style={{background: randomColor,height: "100vh",transition: "all 0.5s ease-in-out"}}>
        <div className="container  d-flex justify-content-center" id="app">
            <div id="quote-box" class="card px-4 mt-5"  style={{width: "500px"}}>
                {randomQuote ?(
                    <div id="text" class="pt-3">
                        <p>{randomQuote.text}</p>
                        <p id="author" class="text-end">{randomQuote.author}</p>
                    </div>
                    
                ) : (
                    <h2>Loading</h2>
                )}
                <div className="column pb-3">
                <a id="tweet-quote" className="btn btn-warning " href={'https://twitter.com/intent/tweet?hashtags=วัยรุ่นสร้างตัว&related=freecodecamp&text=' +
                 encodeURIComponent(
                     '"' + randomQuote.text + '" ' + randomQuote.author
                     )
                 } target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                <button id="new-quote" onClick={getNewQuote} className="btn btn-primary float-end">New Quote</button>
                </div>
            </div>
        </div>
    </div>
    );
}
ReactDOM.render(<App/>, document.getElementById('app'));