import React, { Fragment, useEffect, useState } from "react";
import './App.css';

function App()
{
  const [view, setView] = useState([]);
  const [follower, setFollower] = useState([]);
  const [mediaCount, setMediaCount] = useState([]);
  // console.log("view is", view)
  // console.log("follower is", follower)

  useEffect(() => {
    (async function()
    {
      const result = await fetch(process.env.REACT_APP_API_KEY);
      const obj = await result.json();
      const myData = obj.media.data;
      console.log("myData is", myData)
      setView(myData);

      const result2 = await fetch(process.env.REACT_APP_FOLLOWER_KEY);
      const obj2 = await result2.json();
      const myfollower = obj2.business_discovery.followers_count
      console.log("myfollower is", myfollower)
      setFollower(myfollower);

      const crrMediaCount = obj2.business_discovery.media_count
      console.log("crrMediaCount is", crrMediaCount)
      setMediaCount(crrMediaCount)
    })()

    // setFollower(myData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>My Instagram</h2>
        <p>current follower is {follower}</p>
        <p>current mediaCount is {mediaCount}</p>
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

