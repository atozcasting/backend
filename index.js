const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyparser = require('body-parser')
var cors = require('cors')
const corsOptions = {
    origin: ['http://localhost:3000', 'https://a2zzcasting.com'],
    credentials: true, // Allow credentials, such as cookies
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.get('/', (req, res) => {
    res.send({ message: 'Hello, Express!' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});