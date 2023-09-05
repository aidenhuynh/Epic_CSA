var playlist = [
    {
        "title":"Carefree",
        "artist":"Kevin MacLeod",
        "cover":"https://i.scdn.co/image/ab67616d0000b2733581aa1ca8780d7ee6461551"
    },
    {
        "title":"Monkeys Spinning Monkeys",
        "artist":"Kevin Macleod",
        "cover":"https://i.scdn.co/image/ab67616d0000b2731f81d415360fd941332ff0f8"
    }
]

var playlistLen = playlist.length

function changeBG() {
    document.getElementById('bg').src = '{{site.baseurl}}/images/stackoverflow.png'
}

function createPlaylistDiv(index) {
    var playlistDiv = document.getElementsByClassName('playlist')[0]
    var item = playlist[index]
    
    var divComponents = {
        "playlistItem":null,
        "numDiv":null,
        "coverDiv":null,
        "songDiv":null,
    }

    const keys = Object.keys(divComponents)

    for (let i = 0; i < keys.length; i ++) {
        var component = keys[i]

        divComponents[component] = document.createElement("div")
        divComponents[component].className = component
    }

    var deleteDiv = document.createElement("div")
    deleteDiv.className = "delete"

    var title = item["title"]
    const artist = item["artist"]
    const count = document.getElementsByClassName('playlistItem').length

    divComponents["songDiv"].title = title + " - " + artist

    if (title.length > 16) {
        title = title.slice(0, 16) + "..."
    }

    divComponents["numDiv"].innerHTML = count + 1
    divComponents["coverDiv"].innerHTML = "<img src='" + item["cover"] + "'>"
    divComponents["songDiv"].innerHTML = "<h1>" + title + "</h1><h2>" + artist + "</h2>"
    deleteDiv.innerHTML = "&#x2715"

    playlistDiv.appendChild(divComponents["playlistItem"])

    for (let i = 1; i < keys.length; i ++) {
        divComponents["playlistItem"].appendChild(divComponents[keys[i]])
    }

    divComponents["playlistItem"].appendChild(deleteDiv)

    deleteDiv.onclick = function() { removePlaylistDiv(count) }

    playlist.slice(1)
}

function createPlaylist() {
    for (let i = 0; i < playlist.length; i ++) {
        createPlaylistDiv(i)
    }
}

function removePlaylistDiv(index) {
    var items = document.getElementsByClassName('playlistItem')
    
    items[index].remove()

    items = document.getElementsByClassName('playlistItem')

    for (let i = 0; i < items.length; i ++) {
        items[i].children[0].innerHTML = i + 1
        items[i].children[3].onclick = function() { removePlaylistDiv(i) }
    }
}

function addSong() {
    const title = document.getElementById('titleInput').value
    const artist = document.getElementById('artistInput').value
    const cover = document.getElementById('coverInput').value

    playlist.push({
        "title":title,
        "artist":artist,
        "cover":cover,
    })

    createPlaylistDiv(playlist.length - 1)
}

function setSong() {
    document.getElementById('bg').src = playlist[0]["cover"]
}

