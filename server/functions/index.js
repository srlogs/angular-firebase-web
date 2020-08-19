const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(
	bodyparser.urlencoded({ extended: false })
);
app.use(cors({ origin: true }));
var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gagavox-678bd.firebaseio.com"
});
const db = admin.firestore();

app.post('/api/users', (req, res) => {
    console.log(req.body.name);
    (async () => {
        const userdata = {
            name : req.body.name,
            email : req.body.email
        }
        try {
            
            console.log(userdata);
          await db.collection('users').add(userdata);
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });

  app.post('/data', (req, res) => {
      console.log(req.body.name);
      return res.send();
  })


exports.app = functions.https.onRequest(app);