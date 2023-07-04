import { useEffect, useState } from 'react';
import './App.css';
import rawText from './text/FULL_SCRIPT.txt'

const App = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(rawText)
    .then(r => r.text())
    .then(text => {
      setText(text);
   });
  }, [])

  return (
    <div className="App">
      {text}
    </div>
  );
}

export default App;
