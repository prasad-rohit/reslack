const express = require("express");

const app = express()

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || 'development'}`,
});
app.use(express.static("public"));

app.listen(process.env.PORT, () => {
    console.log("App is listening at port ", process.env.PORT);
})