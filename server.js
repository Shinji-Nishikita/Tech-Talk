require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const knex = require("./db/knex");
const PORT = process.env.PORT || 4000;
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require("./credentials.json")

app.use(express.json());
app.use(cors());

//google spread sheet
// (async function() {
   
//     const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREAD_SHEET_URL);
    
//     await doc.useServiceAccountAuth(credentials);
    
//     await doc.loadInfo(); // loads document properties and worksheets
 
//     // console.log(doc.title)
//     const sheet = doc.sheetsByIndex[0]; 
//     // console.log("sheet is", sheet)
    
//     const rows = await sheet.getRows();
//     // console.log(rows)
//     const eachRow = rows[0]._rawData
//     for (const ele of eachRow)
//     {
//         // console.log(ele)
//     }
   
// }())

app.get("/pics", (req, res) =>
{
    res.send("test");
})

app.post("/pics", async (req, res) =>
{
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREAD_SHEET_URL);
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    console.log("sheet is",sheet)
    // console.log(req.body)
    // console.log(req.body.business_discovery.followers_count)
    // console.log(req.body.business_discovery.media_count)
    const sundar = sheet.addRow({ フォロワー数: req.body.business_discovery.followers_count, 投稿数: req.body.business_discovery.media_count });
    const rows = await sheet.getRows();
    console.log(rows)
    // const eachRow = rows[0]._rawData
    // for (const ele of eachRow)
    // {
    //     // console.log(ele)
    // }
    res.send(req.body)
})

// app.use(express.static("./build"));
// app.get("*", (req, res) => {
//     res.sendFile("./build/index.html");
// });
  
app.listen(PORT, () =>
{
    console.log(`🎉 Server running at https://localhost:${PORT}!`);
})


//APIからデータ取得 POSTするメソッドを探す(spread sheet用のメソッド)
//フロントからfetchしてpost→サーバー側からそのpostされた情報をspreadsheetへ反映するメソッド実行