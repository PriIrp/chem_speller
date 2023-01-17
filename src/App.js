import { useState, useRef, useEffect } from "react";
import AllBoxes from "./AllBoxes";
import './App.css';

function App() {

  const [word, setWord] = useState('')
  const [finalWord, setFinalWord] = useState(null)

  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(evt) 
  {
    evt.preventDefault();

    setWord(evt.target.value); 

    setFinalWord(word);

    setIsSubmitted(true);

    setWord('');
  }

  function isShow()
  {
    if(isSubmitted)
    {
      return(
        <AllBoxes userWord = {finalWord}/>
      )
    }
  }

  return (
    <div className="App">

      <div className="Title"> 
        Chemical Element Speller
      </div>

      <div className='Input'> 
        <form onSubmit={handleSubmit}> 
          <input
            type= 'text'
            value= {word}
            onChange= {(e) => setWord(e.target.value)}>
          </input>

          <button> Submit </button>
        </form>
      </div>

      <div className='Response'>
        {isShow()}
      </div>
        
    </div>
  );
}

export default App;
