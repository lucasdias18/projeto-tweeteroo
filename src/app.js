import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

let users = []
let tweets = []

app.post('/sign-up', (req, res) => {
    const name = req.body.username
    const pic = req.body.avatar
    const user = {username: name, avatar: pic}
    if (name === "" || pic === "") {
        res.send('Todos os campos são obrigatórios!')
        return;
    }
    users.push(user)
    res.send('Ok!')
})

app.post('/tweets', (req, res) => {
    const name = req.body.username
    const tt = req.body.tweet
    const tweet = {username: name, tweet: tt}
    tweet.push(tweets)
    res.send('Ok!')
})

app.listen(5000, () => console.log('servidor subiu namoral!!'));