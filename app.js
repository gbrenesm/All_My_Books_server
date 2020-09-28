require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require("cors")


mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
require("./config/session")(app)
app.use(cors({
  origin: ["http://localhost:3001"],
  credentials: true
}))


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.use(express.static(path.join(__dirname, "public/build")))



const index = require("./routes/index.routes");
app.use('/api', index);

const auth = require("./routes/auth.routes")
app.use("/auth", auth)

const book = require("./routes/book.routes")
app.use("/api", book)

const note = require("./routes/note.routes")
app.use("/api", note)

const quote = require("./routes/quotes.routes")
app.use("/api", quote)

const shelf = require("./routes/shelf.routes")
app.use("/api", shelf)

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build", "index.html"))
})

module.exports = app;
