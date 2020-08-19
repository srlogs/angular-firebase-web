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
   // console.log(req.body.name);
    (async () => {
        
        try {
            const userdata = {
                name : req.body.name,
                email : req.body.email
            }
            console.log(userdata);
          await db.collection('users').add(userdata);
          return res.status(200).send();
        } catch (error) {
          //console.log(error);
          return res.status(500).send(error);
        }
      })();
  });

  app.get('/api/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('users');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    name: doc.data().name,
                    email: doc.data().email
                };
                response.push(selectedItem);
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            //console.log(error);
            return res.status(500).send(error);
        }
        })();
    });



exports.app = functions.https.onRequest(app);