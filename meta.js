'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const urlMetadata = require('url-metadata')

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/api/getMeta', (req, res) => {
    urlMetadata('https://bit.ly/2ePIrDy').then(
        function (metadata) {
            res.json(JSON.stringify(metadata))
        },
        function (error) {
            res.status(404).json({message: error})
        }
    )
})

app.get('/api/getMeta/:url', (req, res) => {
    const url = req.params.url
    console.log('yes')
    console.log(url)
    urlMetadata('https://'+url).then(
        function (metadata) {
            res.json(JSON.stringify(metadata))
        },
        function (error) {
            res.status(404).json({message: error})
        }
    )
})

const hostname = 'localhost'
const port = process.env.PORT

app.listen((port, hostname) => {
    console.log('Running')
})