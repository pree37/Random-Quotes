function App(){
    
    const [quotes,setQuotes] = React.useState([]);
    const [randomQuote,setRandomQuote] = React.useState([]);
    const [randomColor,setRandomColor] = React.useState("#dddec3");
    React.useEffect(() => {
        function fetchData(){
            const data = [{
                    text:"ไม่มีก็แค่สร้าง  ไม่ใช่อ้างว่าบ้านจน",
                    author: "หลานย่าโม"
                },{
                    text:"ไม่เคยลำบากอย่าปากดี",
                    author: "เอ็ม ออนิวรังสิต"
                },{
                    text:"เบื่อแล้วรถเเรง อยากขับรถซื้อแกงบ้างอ่ะ",
                    author: "แพนด้าซิ่ง วิ่งส่งแกง"
                },{
                    text:"จะดูถูก ก็ไม่ว่า แต่อย่าเบิ้ลใส่หน้า ผมไม่ชอบ",
                    author: "แพนด้าซิ่ง วิ่งส่งแกง"
                },{
                    text:"ชอบซิ่ง ไม่ชอบสองใจ สายเปย์หลบไป สายหมอบจะเดิน",
                    author:"สายหมอบ"
                },{
                    text:"จ่าโบก โผมบิด จ่าสะกิดโผมสับโดด",
                    author:"สับเด้ง"
                },{
                    text:"ได้ข่าวว่าจัดจ้าน มาย่านพี่สิเดี่ยวจัดให้",
                    author:"สับเด้ง"
                },{
                    text:"รักมันทำร้ายเลยย้ายมาทำรถ รักมันรันทดเลยทำรถประชดรัก",
                    author:"สายหมอบ"
                },
            ];
           
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
