import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App()
{
  const [view, setView] = useState([]);
  const [instaData, setinstaData] = useState([]);

  useEffect(() =>
  {
    async function getInsta()
    {
      const result = await axios.get(process.env.REACT_APP_FOLLOWER_KEY)
      setinstaData(result.data)
    }
    getInsta();
  }, []);


  async function handleClick2()
  {
    await axios.post("/counts", instaData)
  }
  

  useEffect(() => {
    (async function()
    {
      const result = await fetch(process.env.REACT_APP_API_KEY);
      const obj = await result.json();
      const myData = obj.media.data;
      setView(myData);
    })()

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="myinsta">My Instagram</h2>
        <button onClick={handleClick2}>show data</button>
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














//保管用
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './App.css';

// function App()
// {
//   const [view, setView] = useState([]);
//   const [follower, setFollower] = useState([]);
//   const [mediaCount, setMediaCount] = useState([]);
//   const [instaData, setinstaData] = useState([]);

//   useEffect(() =>
//   {
//     async function getInsta()
//     {
//       const result = await axios.get(process.env.REACT_APP_FOLLOWER_KEY)
//       // console.log(result.data)
//       setinstaData(result.data)
//     }
//     getInsta();
//   }, []);

//   // console.log(instaData)

//   // async function handleClick()
//   // {
//   //   // console.log(instaData)
//   //   await axios.post("/infos", instaData)
//   // }

//   async function handleClick2()
//   {
//     console.log(instaData)
//     await axios.post("/counts", instaData)
//   }
  

//   useEffect(() => {
//     (async function()
//     {
//       const result = await fetch(process.env.REACT_APP_API_KEY);
//       const obj = await result.json();
//       const myData = obj.media.data;
//       setView(myData);
//     })()

//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2 className="myinsta">My Instagram</h2>
//         {/* <button onClick={handleClick}>push</button> */}
//         <button onClick={handleClick2}>show data</button>
//         <ul className="pictures">
//           {view.map((val, index) =>
//             <img src={val.media_url} />
//             )} 
//       </ul>
//       </header>
//     </div>
//   );
// }

// export default App;

