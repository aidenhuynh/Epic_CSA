---
toc: true
comments: true
layout: post
title: Table Group Randomizer
description: Enter the number of groups you want
type: project
courses: {csa: {week: 3}}
type: tangibles
---
<style>
    button {
        width: 35%;
        margin: auto;
        text-align: center;
    }

    input {
        width: 100%;
        padding: 0
    }

    .file {
        width: 80%
    }

    textarea {
        width: 100%;
        height: 5em
    }

</style>
<table class="inputs">
    <tr>
        <th># of Groups</th>
        <th># of People/Group</th>
        <th>Names (file)</th>
        <th>Font Size</th>
    </tr>
    <tr>
        <td>
            <input placeholder="0" id="groupNum">
        </td>
        <td>
            <input placeholder="0" id="peopleNum">
        </td>
        <td>
            <input class="file" type="file" id="file">
        </td>
        <td>
            <button id="fontIncrease">+</button>
            <button id="fontDecrease">-</button>
        </td>
    </tr>
    <tr></tr>
    <tr>
        <th colspan="4">Names (Separated by lines or comma)</th>
    </tr>
    <tr>
        <td colspan="4">
            <textarea id="people"></textarea>
        </td>
    </tr>
</table>
<br>
<table id="groups">
</table>

<script>
    function getPeople() {
        var people = document.getElementById("people").value.split(/\n|,/)

        var peopleArray = []

        for (let i = 0; i < people.length; i ++) {
            if (people[i] != "," && people[i] != " " && people[i] != "") {
                peopleArray.push(people[i])
            }
        }

        return peopleArray
    }

    function makeGroups() {
        const people = shuffle(getPeople())
        var groupNum = document.getElementById('groupNum').value
        var peopleNum = document.getElementById('peopleNum').value
        
        if (peopleNum == "" && groupNum == "") {
            return
        }
        else if (peopleNum == "") {
            var output = []

            for (let i = 0; i < groupNum; i ++) {
                output.push([])
            }

            for (let j = 0; j < people.length; j ++) {
                for (let k = 0; k < groupNum; k ++) {
                    output[k].push(people[j])
                }
            }

        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }

        return array
    }
</script>