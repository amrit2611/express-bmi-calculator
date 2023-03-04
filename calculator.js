import express from 'express';
import bodyParser from 'body-parser';
//bodyParser is an npm package that allows us to parse the information sent from the post request.
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);  
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))  
//urlcoded used when data posted through and html form. Other forms include JSON and text.
//The extended option allows us to post nested objects.

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/", (req, res) => {
//     let num1 = Number(req.body.num1);
//     let num2 = Number(req.body.num2);
//     //without using 'Number', by default req.body.element will be processed as text.
//     //and the numbers will be appended in place of being calculated.

//     let result = num1 + num2;
//     res.send("The required sum is: <br>" + result);
// })

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height)
    res.send("Your BMI is " + bmi);
})



app.listen(port, () => {
    console.log(`App running on port ${port}`);
})

