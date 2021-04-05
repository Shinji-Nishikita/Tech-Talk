import React, { Fragment, useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App()
{
  const [view, setView] = useState([]);
  console.log("view is",view)

  useEffect(async () => {
    const result = await fetch(process.env.REACT_APP_API_KEY);
    const obj = await result.json();
    const myData = obj.media.data;
    setView(myData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h2>Test</h2>
        <ul>
          {view.map((val) => 
                <img src={val.media_url} />
          )} 
      </ul>
      </header>
    </div>
  );
}

export default App;

