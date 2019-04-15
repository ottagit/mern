import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';
import devBundle from './devBundle';
import template from './../template';

const app = express();
devBundle.compile(app);

// Connect node server to MongoDB
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern';
MongoClient.connect(url, (err, db) => {
  console.log("Connected sucessfully to MongoDB server");
  db.close();
});

const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

// Route handling code
app.get('/', (req, res) => {
  res.status(200).send(template());
});

// Server code
let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', port);
});
