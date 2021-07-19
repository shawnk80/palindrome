import './App.css';
import React, {useState} from "react"


function App() {
  const [word, setWord] = useState("");
  
  const Palindrome = (str) => { 

    // code goes here
    let strLower = str.toLowerCase();
    let regExp = /[a-z]/g;
  
    let cleanArray = strLower.match(regExp);
    let cleanArrayCopy = [...cleanArray];
    let reverseCleanArray = cleanArrayCopy.reverse();
    
  
    for (let i = 0; i < cleanArray.length / 2; i++) {
      
      if (cleanArray[i] !== reverseCleanArray[i]) {
        return false;
      }
    }

  return true;
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${word} ${Palindrome(word) ? 'is' : 'is not'} a palindrome`);
  }
  return (
    <form onSubmit={handleSubmit}>
          <label>Enter a word:
          <input type="text" value={word} onChange={e => setWord(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
