'use strict';

const functions = require('firebase-functions');
const express = require('express');
const line = require('@line/bot-sdk');

const config = {
    channelSecret: 'a586c616f5b2f07418db02bcc5ce6bfa', // LINE Developersでの準備②でメモったChannel Secret
    channelAccessToken: 'BODvnViqXj9AArkNdadZhvz3CCerkmRUpWZv0PUY/FIhrDwTklx3MGw4KPBHQQjo9IdPuZNqKeHycQvBqjXGqi+5+zh7wJMBBuvapJZFLUa9tpjRciQVyeUbIkWsSDNJi5jBgv/nGaEqzeCQqGo5FgdB04t89/1O/w1cDnyilFU=' // LINE Developersでの準備②でメモったアクセストークン
};

const app = express();

app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result))
      .catch((result) => console.log('error!!!'));
});

const client = new line.Client(config);

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text + 'を受け取りました。'
  });
}

exports.app = functions.https.onRequest(app);