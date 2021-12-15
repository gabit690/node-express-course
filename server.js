const express = require('express');
const app = express();

const mockUserData = [
    {name:"Mark"},
    {name:"Jill"}
];

app.get("/users", (req, res) => {
    res.json({
        success: true,
        message: "Successfully got users. Nice!",
        users: mockUserData
    });
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});