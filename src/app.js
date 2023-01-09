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
        res.status(400).send('Todos os campos são obrigatórios!')
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
    tweets.push(tweet)
    res.send('Ok!')
})

app.get('/tweets', (req, res) => {
    let tts = [...tweets].reverse()
    let ultimosTweets = tts.slice(0,10)
    console.log(tts)
    const resposta = []
    // let names = users.map((n) => n.username)
    
    // for (let i=0; i<=ultimosTweets.length; i++) {
    //     // let tweetAtual = ultimosTweets[i]
    //     let getAvatar = users.findIndex((a => a.username === ultimosTweets[i].username))
    //     let userAtual = users[getAvatar]
    //         resposta.push({
    //             username: ultimosTweets[i].username,
    //             avatar: userAtual.avatar,
    //             tweet: ultimosTweets[i].tweet
    //         })
    // }

    res.send(ultimosTweets)

    // res.send(ultimosTweets.slice(0,10))
    // let resposta = []
    // for (i=0; i<=ultimosTweets.length; i++) {
    //     resposta.push({username: ultimosTweets[i].username, avatar: users})
    // }
})

app.listen(5000, () => console.log('servidor subiu namoral!!'));