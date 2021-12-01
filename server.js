const uuidv4 = require('uuid/v4');
const express = require('express');
const path = require('path');

const app = express()
const port = process.env.PORT || 3000;



app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/json', (req, res) => {
  let objJson = {
    "slideshow": {
      "author": "Yours Truly",
      "date": "date of publication",
      "slides": [
        {
          "title": "Wake up to WonderWidgets!",
          "type": "all"
        },
        {
          "items": [
            "Why <em>WonderWidgets</em> are great",
            "Who <em>buys</em> WonderWidgets"
          ],
          "title": "Overview",
          "type": "all"
        }
      ],
      "title": "Sample Slide Show"
    }
  }

  res.json(objJson);

});

app.get('/uuid', (req, res) => {
  let intId = uuidv4();
  res.json({'uuid':intId});
});

app.get('/status/:code', (req, res) => {
  let intStatusCode = parseInt(req.params.code);
  res.status(intStatusCode).json({'Status Code':intStatusCode});
});

app.get('/delay/:time', (req, res) => {
  let intDelayTime = parseInt(req.params.time);
  setTimeout(() => {
    res.json({'message':"Delay "+intDelayTime+" seconds for response"});
  }, intDelayTime * 1000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})