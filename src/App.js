import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App()
{
  const [view, setView] = useState([]);
  const [follower, setFollower] = useState([]);
  const [mediaCount, setMediaCount] = useState([]);
  const [instaData, setinstaData] = useState([]);

  // async function handleClick() {
  //   const result = await fetch(process.env.REACT_APP_FOLLOWER_KEY, {
  //     method: "POST",
  //     body: JSON.stringify({ name: "test" }),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });
  //   return result.json();
  // }
  useEffect(() =>
  {
    async function getInsta()
    {
      const result = await axios.get(process.env.REACT_APP_FOLLOWER_KEY)
      console.log(result.data)
      setinstaData(result.data)
    }
    getInsta();
  }, []);

  console.log(instaData)

  async function handleClick()
  {
    console.log(instaData)
    await axios.post("/pics", instaData)
  }
  

  useEffect(() => {
    (async function()
    {
      const result = await fetch(process.env.REACT_APP_API_KEY);
      const obj = await result.json();
      const myData = obj.media.data;
      // console.log("myData is", myData)
      setView(myData);

      const result2 = await fetch(process.env.REACT_APP_FOLLOWER_KEY);
      const obj2 = await result2.json();
      const myfollower = obj2.business_discovery.followers_count
      // console.log("myfollower is", myfollower)
      setFollower(myfollower);

      const crrMediaCount = obj2.business_discovery.media_count
      // console.log("crrMediaCount is", crrMediaCount)
      setMediaCount(crrMediaCount)
    })()

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>My Instagram</h2>
        <p>current follower is {follower}</p>
        <p>current mediaCount is {mediaCount}</p>
        <button onClick={handleClick}>post</button>
        <ul className="pictures">
          {view.map((val) => 
                <img src={val.media_url} />
          )} 
      </ul>
      </header>
    </div>
  );
}

export default App;

