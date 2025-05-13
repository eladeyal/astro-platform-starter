const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/save-task', (req, res) => {
    const task = req.query.task;
    fs.appendFile('CompletedTasks.txt', task + "\n", (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Failed to save task');
        } else {
            res.send('Task saved successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
