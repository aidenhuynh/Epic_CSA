---
toc: true
comments: true
layout: post
title: Classroom Jukebox
description: Frontend for CSA project
type: project
courses: {csa: {week: 1}}
type: tangibles
---
<link rel="stylesheet" href="{{site.baseurl}}/assets/classroom_jukebox/styles.css">
<script src="{{ site.baseurl }}/assets/classroom_jukebox/script.js"></script>

<div class="main">
    <div class="player">
        <div class="songMetaData" id="songMetaData">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5EWPGh7jbTNO2wakv8LjUI?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div class="mediaControls">
            <div class="buttons">
            </div>
            <div class="scrubber">
            </div>
            <div class="search">
            </div>
        </div>
    </div>
    <div id="playlistDiv" class="playlist">
    </div>
</div>

<button onclick="createPlaylist()">create playlist</button>
<br>
<input id="titleInput" placeholder="Enter song title">
<br>
<input id="artistInput" placeholder="Enter song artist">
<br>
<input id="coverInput" placeholder="Enter song cover img url">
<br>
<button onclick="addSong()">add song</button>

