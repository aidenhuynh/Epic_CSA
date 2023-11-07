---
toc: true
comments: true
layout: post
title: code names board game
description: stickin out your gyatt for the rizzler
courses: {csa: {week: 12}}
type: tangibles
---
<link rel="stylesheet" href="{{site.baseurl}}/assets/codenames/styles.css">
<script src="{{ site.baseurl }}/assets/codenames/script.js"></script>

<div id="main" class="main">
</div>
<div class="options">
    <div class="buttons">
        <button onclick="generate()">Generate board</button>
        <button onclick="reset('main')">Reset colors</button>
        <button onclick="generateKey()">Generate key</button>
    </div>
    <div class="text" id="text">
    </div>
</div>
<br><br><br><br><br>
<div id="key" class="main">
</div>