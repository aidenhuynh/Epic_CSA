---
toc: true
comments: true
layout: post
title: Classroom Jukebox Main
description: Frontend for CSA project
type: project
courses: {csa: {week: 2}}
type: tangibles
---
<link rel="stylesheet" href="{{site.baseurl}}/assets/classroom_jukebox/styles.css">
<script src="{{ site.baseurl }}/assets/classroom_jukebox/script.js"></script>

<div class="main">
    <div class="player">
        <div class="songMetaData" id="songMetaData">
            <div class="background">
            </div>
        </div>
        <div class="mediaControls">
            <div class="buttons">
                <img id="back" src="{{site.baseurl}}/images/classroom_jukebox/back.png">
                <img id="play" src="{{site.baseurl}}/images/classroom_jukebox/play.png">
                <img id="skip" src="{{site.baseurl}}/images/classroom_jukebox/skip.png">
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