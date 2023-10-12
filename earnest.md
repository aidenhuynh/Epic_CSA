---
toc: false
comments: false
layout: post
title: earnest act 1
permalink: /earnest
---
<style>
    td {
        border-bottom: 0;
        vertical-align: top;
    }
</style>

<table id = "table">
    <tr>
        <th>script</th>
        <th>line #</th>
    </tr>
</table>

<script>
    var script = ""
    var scriptList = []

    function getScript() {
        fetch('{{site.baseurl}}/assets/earnest/act-i.txt')
            .then(response => response.text())
            .then(list => {

        script = list.split("\n")
        setText()
        })

        
    }

    function setText() {
        console.log('run')
        var table = document.getElementById('table')
        var lineText = ""
        var number = ""
        var lineCount = 1

        for (let i = 0; i < script.length; i ++) {
            var line = script[i]

            if (line == "") {
                line = ""
                number = ""
            }

            else if (line[0] == "[") {
                lineText = line
                number = ""
            }

            else {
                lineText = line
                number = lineCount
                lineCount ++
            }

            table.innerHTML += "\
                <tr>\
                    <td>" + line + "</td>\
                    <td>" + number + "</td>\
                </tr>"
        }
    }

    getScript();
</script>