const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let savedComponents = [];

app.post('/api/components', (req, res) => {
    const component = req.body;
    savedComponents.push(component);
    res.status(201).json({ message: "Component saved", component });
});

app.get('/api/components', (req, res) => {
    res.json(savedComponents);
});

app.listen(5000, () =>
    console.log('Backend running on http://localhost:5000')
);
