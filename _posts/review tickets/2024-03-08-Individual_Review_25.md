---
toc: true
comments: true
layout: post
title: Individual Review - Week 25
description: Aiden Huynh, P1
type: review
courses: {csa: {week: 25}}
---
## Project Contributions

### Drag & Drop

My focus this week was implementing drag and drop functionality to my table generator. When I started coding, though, I did not fully plan out what I was doing because I was mostly just messing around and learning how to use jQuery UI's .draggable() and .droppable() methods, so I implementing swapping whole tables instead of table members as intended.

> The following is taken from an issue on our [scrum board](https://github.com/John-sCC/jcc_frontend/issues/41#issuecomment-1984054892):

Started out by [implementing jQuery UI](https://github.com/John-sCC/jcc_frontend/commit/67d64722cb476331944a51560c4db711aae58197) and testing its draggable and droppable methods, and learned to use different headers to achieve different results.

```html
<!-- Link jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<!-- Link jQueryUI -->
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js" type="text/javascript"></script>
```

In the following code block, we have the headers "revert", "scroll", and "containment", which I use to make the boxes return to their original positions after being dropped so that I can swap the content of the boxes rather than the boxes' positions. The scroll and containment make sure that they can not be dragged out of bounds.

```js
const table = $(`#${tableId}`)

    table.draggable({
        revert: true,
        scroll: true,
        containment: $("#table-div")
    })
```

Eventually got to fully implement [swapping functionality between tables](https://github.com/John-sCC/jcc_frontend/commit/02a8a6aad30104bb3e6b7ca7af56c0029fc22dfe) by swapping the content of the table divs.

```js
function dragDrop(nameId) {
    console.log("run")
    const table = $(`#${tableId}`)

    table.draggable({
        revert: true,
        scroll: true,
        containment: $("#table-div")
    })

    table.droppable({
        drop: function(event, ui) {
            var draggable = ui.draggable
            var droppable = $(this)

            var parent1 = draggable.parent()
            var parent2 = droppable.parent()

            temp = draggable

            parent1.children()[1].remove()
            parent1.append(droppable)

            parent2.append(temp)
        }
    })
}
```

For the next steps, I realized that I'm supposed to make MEMBERS swappable, not WHOLE TABLES, so I will change the code a little to fix that. Also, there is a weird animation thing that happens with the jQuery methods so I will work on making that looks smoother as well.

### Links
* [Key Commit](https://github.com/John-sCC/jcc_frontend/commit/02a8a6aad30104bb3e6b7ca7af56c0029fc22dfe)
* [Pull request](https://github.com/John-sCC/jcc_frontend/pull/45)
* [Live Demo](https://john-scc.github.io/jcc_frontend/tablegenerator)

## Team Management

I have been taking on the role of scrum master for two of the subteams, as there is an odd number of people in period 1 to where we'd either have to have pairs of 2 and 3, or a pair of 5, so I decided to make two teams of two that I oversee both of, making them basically trios.

I have also been managing our team review tickets and facilitating communication through our Discord, where I send announcements regarding what Mr. Mortensen is looking for and where to put it (tickets)

![]