const express = require("express");
const app = express();
const body = require("body-parser");
const cors = require('cors');
const config = require('./config')
app.use(body.json());
app.use(cors());

const admin = require('firebase-admin');
const serviceAccount = require('../key.json');
const { query } = require("express");
const databaseURL = "https://shop-a4c8d.firebaseio.com/"
function init() {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: databaseURL
        });
        console.log("database is connected!");
    } catch (err) {
        console.log("connect to server failed!");
    }
    try {
        app.listen(config.PORT, config.HOST, () => {
            console.log(`server is running on ${config.HOST}:${config.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
}
init();


app.get("/items", (req, res) => {
    (async () => {
        let data = [];
        let snapshot = await admin.firestore().collection('shop').get();
        snapshot.forEach(doc => {
            data.push(doc.data())
        });
        res.send(data);
    })();
})

function getId() {
    return admin.firestore().collection("id").doc("id").get();
}
function increseId(newId) {
    return admin.firestore().collection("id").doc("id").update({
        id: newId
    });
}
app.post("/shop-create", (req, res) => {
    let { title, price, stock } = req.body;
    let data = {
        title: title,
        price: price,
        stock: stock
    };
    (async () => {
        let id = (await getId()).data().id;
        await increseId(id + 1);
        await admin.firestore().collection("shop").doc(id.toString()).create({
            id: id,
            ...data
        });
        return res.status(200).send();
    })();
})

app.delete("/item-delete", (req, res) => {
    let { id } = req.query;
    (async () => {
        await admin.firestore().collection("shop").doc(id.toString()).delete();
        return res.status(200).send();
    })();

})
app.put("/item-update", (req, res) => {
    let { id, title, price, stock } = req.body;
    (async () => {
        await admin.firestore().collection("shop").doc(id.toString()).update({ title: title, price: price, stock: stock });
        return res.status(200).send();
    })();


})