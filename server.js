const express = require('express');
const app = express();
app.use(express.json()); 
let users = [
    {id:1,name:"Pooja"},
    {id:2,name:"Abi"}
];
app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/users', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.json(product);
});
app.post('/users', (req, res) => {
    const newUser = { 
        id: users.length + 1, 
        name: req.body.name, 
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send({ message: 'User not found' });

    user.name = req.body.name;
    user.price = req.body.price;
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id == req.params.id);
    if (userIndex === -1) return res.status(404).send({ message: 'User not found' });

    users.splice(userIndex, 1);
    res.json({ message: 'User deleted' });
});
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port http://localhost:3001`));
