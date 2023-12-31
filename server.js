
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://1234:1234@anhtu.ede1ies.mongodb.net/BookList";

mongoose.connect(uri, { 
        useNewUrlParser: true, 
        // useCreateIndex: true,  
        useUnifiedTopology: true   }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// import routes
const bookRouter = require('./routes/booklist'); 


app.use('/', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
