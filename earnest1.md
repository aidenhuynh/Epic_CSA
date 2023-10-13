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

    table {
        white-space: pre;
    }

    .line {
        text-align: center
    }
</style>

<table id = "table">
    <tr>
        <th>script</th>
        <th>line #</th>
    </tr>
    <tr>
        <td id="bruh"></td>
        <td class="line" id="linetable"></td>
    </tr>
</table>

<script>
    var script = []
    var raw = ""
    var helpme = ""

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

        var lol = false
        var lineCount = 1

        document.getElementById('bruh').innerHTML = raw

        for (let i = 0; i < script.length; i ++) {
            var line = script[i]
            console.log(line)

            if (line[0] == "[") {
                if (!line.includes("]")) {
                    if (i > 1) {
                        if (script[i-2] != script[i-2].toUpperCase()) {
                            console.log("lol activated")
                            lol = true
                        }
                    }
                    else {
                        console.log("lol activated")
                        lol = true
                    }
                    
                }

                else {
                    lol = false
                }
            }      

            if (lol == true || line == "" || line == line.toUpperCase() || line[0] == "[" && line.substr(-1) == "]") {
                helpme += "\n"
            }

            else {
                console.log('realline')
                helpme += lineCount + "\n"
                lineCount ++
            }

            if (line.includes("]")) {
                lol = false
            }
        }

        document.getElementById('linetable').innerHTML = helpme
    }

    getScript();
</script>