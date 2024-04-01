---
toc: true
comments: true
layout: post
title: SASS Tests for CSSE
description: am i a genius? let's find out.. (YES I AM)
courses: {csa: {week: 28}}
type: tangibles
---
<style>
    .csse-light {
        background-color: blue;
    }

    .csse-light b {
        color: purple;
    }

    .csse-dark {
        background-color: red;
    }

    .csse-dark b {
        color: green;
    }
</style>

<div id="main" class="csse-light">
    Sample text
    <b>sampler text</b>
</div>
<button id = "switch" onclick="switchClass()">switch theme!</button>

<script>
    function switchClass() {
        var div = document.getElementById('main')

        if (div.className == "csse-light") {
            div.className = "csse-dark"
        }

        else {
            div.className = "csse-light"
        }
    }
</script>