const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.static(path.join(__dirname)))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));  
// app.use(morgan('dev'))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
try {
    app.listen(process.env.PORT || 5000, () => console.log("Backend server is running"))
} catch (err) {
    console.log(err.message)
}
