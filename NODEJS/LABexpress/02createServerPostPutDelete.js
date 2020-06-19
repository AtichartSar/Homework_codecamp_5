const express = require('express')
const app = express()

app.put('/bye', (req, res) => {
    res.send('put . . .')
})

app.post('/bye', (req, res) => {
    res.send('post . . .')
})

app.delete('/bye', (req, res) => {
    res.send('delete . . .')
})

app.listen(5555, () => {
    console.log('start . . .');
})