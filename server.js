const express = require('express')
const path = require('path');
var bodyParser = require('body-parser')
const connectDB = require('./config/db');
const app = express()
const PORT = process.env.PORT || 3001;


// Init Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Connect Database
connectDB()


// Define Routes
app.use('/api/user', require('./routes/api/user'))


// app.get('/', (req, res) => res.send('Hello World!'))


// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname))
//   })

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))