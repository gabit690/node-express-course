const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 8000;
const mockUserData = [
    {name:"Mark"},
    {name:"Jill"}
];

app.use(bodyParser.json());

app.get("/users", (req, res) => {
    res.json({
        success: true,
        message: "Successfully got users. Nice!",
        users: mockUserData
    });
});

app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "Got one user",
        user: req.params.id
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "gabit";
    const mockPassword = "1234";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: "Password and username match!",
            token: "Encryted token goes here"
        });
    } else {
        res.json({
            success: false,
            message: "Password and username do not match"
        });
    }
});

app.get("/author", (req, res) => {
    console.log("Easter egg was found");
    res.json({
        author: "Gabit",
        country: "Argentina",
        year: (new Date()).getFullYear()
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});