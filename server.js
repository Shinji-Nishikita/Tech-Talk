require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require("./credentials.json")

app.use(express.json());
app.use(cors());

app.get("/pics", (req, res) =>
{
    res.send("test");
})

app.post("/counts", async (req, res) =>
{
    
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREAD_SHEET_URL);
    console.log(process.env.GOOGLE_SPREAD_SHEET_URL)
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const myData = req.body.business_discovery;
    const countData = req.body.business_discovery.media.data;
    await sheet.getRows();

    //フォロワー数、投稿数、投稿タイトル
    await sheet.addRow({ followers: myData.followers_count, posts: myData.media_count, post_no1: countData[0].caption, post_no2: countData[1].caption, post_no3: countData[2].caption, post_no4: countData[3].caption, post_no5: countData[4].caption, post_no6: countData[5].caption });
    //いいね数
    await sheet.addRow({ post_no1: countData[0].like_count, post_no2: countData[1].like_count, post_no3: countData[2].like_count, post_no4: countData[3].like_count, post_no5: countData[4].like_count, post_no6: countData[5].like_count });
    //コメント数
    await sheet.addRow({ post_no1: countData[0].comments_count, post_no2: countData[1].comments_count, post_no3: countData[2].comments_count, post_no4: countData[3].comments_count, post_no5: countData[4].comments_count, post_no6: countData[5].comments_count });
    res.send(req.body)
})
  
app.listen(PORT, () =>
{
    console.log(`🎉 Server running at https://localhost:${PORT}!`);
})










//保管用
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const app = express();
// // const knex = require("./db/knex");
// const PORT = process.env.PORT || 4000;
// const { GoogleSpreadsheet } = require('google-spreadsheet');
// const credentials = require("./credentials.json")

// app.use(express.json());
// app.use(cors());

// app.get("/pics", (req, res) =>
// {
//     res.send("test");
// })

// // app.post("/infos", async (req, res) =>
// // {
// //     const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREAD_SHEET_URL);
// //     await doc.useServiceAccountAuth(credentials);
// //     await doc.loadInfo();
// //     const sheet = doc.sheetsByIndex[1];
// //     const sundar = sheet.addRow({ フォロワー数: req.body.business_discovery.followers_count, 投稿数: req.body.business_discovery.media_count });
// //     const rows = await sheet.getRows();
// //     res.send(req.body)
// // })

// app.post("/counts", async (req, res) =>
// {
    
//     const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREAD_SHEET_URL);
//     console.log(process.env.GOOGLE_SPREAD_SHEET_URL)
//     await doc.useServiceAccountAuth(credentials);
//     await doc.loadInfo();
//     const sheet = doc.sheetsByIndex[0];
//     const myData = req.body.business_discovery;
//     // console.log("myData",myData)
//     const countData = req.body.business_discovery.media.data;
//     await sheet.getRows();
//     // const columns = rows[0]._sheet.headerValues;
//             // const key = columns[index + 2];
//             // console.log("myData.media is",countData[0])
//     //         // await sheet.updateProperties({ post_no1: eachData[0].like_count });
//     // await sheet.addRow({ フォロワー数: myData.followers_count, 投稿数: myData.media_count, post_no1: countData[0].caption, post_no2: countData[1].caption, post_no3: countData[2].caption, post_no4: countData[3].caption, post_no5: countData[4].caption, post_no6:countData[5].caption });
//     // await sheet.addRow({ フォロワー数: myData.followers_count, 投稿数: myData.media_count});

//     //フォロワー数、投稿数、投稿タイトル
//     await sheet.addRow({ followers: myData.followers_count, posts: myData.media_count, post_no1: countData[0].caption, post_no2: countData[1].caption, post_no3: countData[2].caption, post_no4: countData[3].caption, post_no5: countData[4].caption, post_no6: countData[5].caption });
//     //いいね数
//     await sheet.addRow({ post_no1: countData[0].like_count, post_no2: countData[1].like_count, post_no3: countData[2].like_count, post_no4: countData[3].like_count, post_no5: countData[4].like_count, post_no6: countData[5].like_count });
//     //コメント数
//     await sheet.addRow({ post_no1: countData[0].comments_count, post_no2: countData[1].comments_count, post_no3: countData[2].comments_count, post_no4: countData[3].comments_count, post_no5: countData[4].comments_count, post_no6: countData[5].comments_count });
//     // console.log(countData[0].caption)
//             // await sheet.addRow({ post_no2: eachData[1].like_count });
//             // await sheet.addRow({ post_no3: eachData[2].like_count });
//             // await sheet.addRow({ post_no4: eachData[3].like_count });
//             // await sheet.addRow({ post_no5: eachData[4].like_count });
//             // await sheet.addRow({ post_no6: eachData[5].like_count });
//             return;
//     // console.log(rows[0]._sheet.headerValues); // 2
//     res.send(req.body)
// })

// // app.use(express.static("./build"));
// // app.get("*", (req, res) => {
// //     res.sendFile("./build/index.html");
// // });
  
// app.listen(PORT, () =>
// {
//     console.log(`🎉 Server running at https://localhost:${PORT}!`);
// })

