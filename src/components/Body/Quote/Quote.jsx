import React,{useState,useEffect} from 'react'
import {DoubleArrow} from '@material-ui/icons';
import './quote.css'
import Seperator from '../../common/seperator/Seperator';
const Quote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    
  useEffect(() => {
    getQuote()
  }, []);

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
    
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
          })
      }
    
    const handleClick = () => {
        getQuote();
      }
    return (
        <>
        <Seperator/>
        <div className="quote">
            <div className="quoteheading">
                <h2>My Favourite Quote</h2>
                <p>Stay <span>Happy</span> stay <span>Motivated</span></p>
            </div>
            <div className="quoteboxcontainer">
                <div className="quotebox">
                    <p>{quote}</p>
                    <h6>{author}</h6>
                </div>
             
            </div>
            <div className="quotebuttons">
                {/* <div className="socialshare">
                    <button className="fbshare">Share on Facebook</button>
                    <button className="twittershare">Share on Twitter</button>
                </div> */}
                <div className="nextsharebtn">
                <button onClick = {handleClick} className="nextquote clay-button">Next<DoubleArrow/></button>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default Quote
