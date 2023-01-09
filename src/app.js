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
    if(!name || !tt) {
        return res.status(400).send('Todos os campos são obrigatórios!')
    }
    const verificacao = users.find((n => n.username === name))
    if (verificacao === undefined) {
        return res.status(401).send('Faça o cadastro primeiro!')
    }
    const tweet = {username: name, tweet: tt}
    tweet.push(tweets)
    res.send('Ok!')
})

app.get('/tweets', (req, res) => {
    console.log('feito!')
})

app.listen(5000, () => console.log('servidor subiu namoral!!'));