---
toc: false
comments: false
layout: post
title: earnest act 1
permalink: /earnest2
---
<style>
    td {
        border-bottom: 0;
        vertical-align: top;
    }

    table {
        white-space: pre;
    }
</style>

<table id = "table">
    <tr>
        <th>script</th>
        <th>line #</th>
    </tr>
    <tr>
        <td id="bruh"></td>
        <td id="linetable"></td>
    </tr>
</table>

<script>
    var script = []
    var raw = ""

    function getScript() {
        fetch('{{site.baseurl}}/assets/earnest/act-i.txt')
            .then(response => response.text())
            .then(list => {

            raw = list
            script = list.split("\n")
            setText()
        })

        
    }

    function setText() {
        console.log('run')

        var lineCount = 1
        var helpme = ""

        document.getElementById('bruh').innerHTML = raw

        for (let i = 0; i < script.length; i ++) {
            var line = script[i]

            helpme += "\n"

            if (line != "" || line != line.toUpperCase() || line[0] != "[") {
                helpme += lineCount
                lineCount ++
            }

            else {
                helpme += "\n"
            }
        }

        document.getElementById('linetable').innerHTML = helpme
    }

    getScript();
</script>