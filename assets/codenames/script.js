var wordList

function makeBoard(id) {
    const table = document.getElementById(id)

    for (let i = 0; i < 5; i ++) {
        var temp = document.createElement("div")
        temp.className = "row"
        table.appendChild(temp)

        for (let j = 0; j < 5; j ++) {
            var data = document.createElement("div")
            const divID = i.toString() + j.toString()
            data.id = divID

            if (id == "main") {
                data.addEventListener('click', function() {
                    markTile(divID)
                })
            }

            else {
                data.id += "b"
            }
            
            data.className = "data"
            temp.appendChild(data)
            data.style.backgroundColor = "rgb(24, 24, 24)"
        }
    }
}

function getWords() {
// Fetch document of words
    fetch('../../../assets/codenames/words.txt')
    .then(response => response.text())
    .then(list => {
        // Convert to array
        wordList = list.split("\n")
    })
}

function generate() {
    var arr = []
    const len = wordList.length

    while(arr.length < len){
        var num = Math.floor(Math.random() * len) + 1

        if(!arr.includes(num)) {
            arr.push(wordList[num])
        }
    }

    var index = 0

    for (let i = 0; i < 5; i ++) {
        for (let j = 0; j < 5; j ++) {
            const id = i.toString() + j.toString()

            document.getElementById(id).innerHTML = arr[index]

            index ++
        }

        index ++
    }
}

function markTile(id) {
    const tile = document.getElementById(id)
    const currentColor = tile.style.backgroundColor

    const colors = [
        "rgb(24, 24, 24)",
        "rgb(26, 100, 191)",
        "rgb(150, 23, 23)",
        "rgb(130, 130, 130)",
        "rgb(255, 255, 255)",
    ]

    for (let i = 0; i < colors.length; i ++) {
        const color = colors[i]

        if (currentColor == color) {
            if (i == colors.length - 1) {
                tile.style.backgroundColor = colors[0]
            }
            else {
                tile.style.backgroundColor = colors[i + 1]
            }
        }
    }
}

function generateKey() {
    reset('key')

    // Should be an even number
    const wordCount = 18

    var idList = []

    while(idList.length < wordCount){
        var num = String(Math.floor(Math.random() * 5)) + String(Math.floor(Math.random() * 5))

        if(!idList.includes(num)) {
            idList.push(num)
        }
    }

    var first
    var second

    if (Math.floor(Math.random() * 2) == 0) {
        first = "rgb(26, 100, 191)"
        second = "rgb(150, 23, 23)"
        alert("Red goes first")
    }

    else {
        first = "rgb(150, 23, 23)"
        second = "rgb(26, 100, 191)"
        alert("Blue goes first")
    }

    for (let i = 0; i < wordCount; i ++) {
        const tile = document.getElementById(idList[i] + "b")

        if (i == wordCount - 1) {
            tile.style.backgroundColor = "rgb(255, 255, 255)"
        }

        else if (i % 2 == 1) {
            tile.style.backgroundColor = first
        }

        else {
            tile.style.backgroundColor = second
        }
    }
}

function reset(id) {
    const main = document.getElementById(id)

    for (const row of main.children) {
        for (const data of row.children) {
            data.style.backgroundColor = "rgb(24, 24, 24)"
        }
    }

}

document.addEventListener("DOMContentLoaded", (event) => {
    getWords()
    makeBoard("main")
    makeBoard('key')
  });