---
toc: true
comments: true
layout: post
title: Spotify API Testing
description: Testing Spotify API with JavaScript
---

<script>
var redirect_uri = 'http://localhost:8888/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

const link = "https://api.spotify.com/v1/search?type=track"
const client_id = "8f64ac95338841a7b0ea2c602762f9f4"
const client_secret = "cbbee54452f74c58842426a0726950fe"

function search(track, artist) {
    
}

app.get('/callback', function(req, res) {

  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };
  }
});
