---
toc: true
comments: true
layout: post
title: Individual Review - Week 26
description: Aiden Huynh, P1
type: review
courses: {csa: {week: 25}}
---
## Project Contributions

### Drag & Drop Updates

> The following is taken from a [pull request](https://github.com/John-sCC/jcc_frontend/issues/41#issuecomment-1984054892):

#### Styling

We now have different hover effects that cause the dropzone to darken and the draggable object to stay on the top layer and lower opacity to make lower elements still visible.

```scss
.droppable-hover {
    @include basic-hover(dark);
}

.ui-draggable-dragging {
    z-index: 1;
    background-color: rgba(239, 239, 239, .9) !important // grayish color with half opacity
}

.ui-droppable-hover {
    filter: brightness(80%);
    transition: filter(.2s)
}
```

![Image](https://github.com/John-sCC/jcc_frontend/assets/112529809/9d531a3e-2a05-45aa-95b7-6971237c49ec)

#### Functionality

The code has been updated to be able to swap students between different tables and to different positions within the same table.

```js
function dragDrop(studentId) {
    const student = $(`#${studentId}`)

    student.draggable({
        revert: true,
        scroll: true,
        containment: $("#table-div"),
        revertDuration: 0
    })

    student.droppable({
        drop: function(event, ui) {
            // define starting row and ending row
            var draggable = ui.draggable
            var droppable = $(this)

            // get parent objects and indexes of each element
            var parent1 = draggable.parent()
            var parent2 = droppable.parent()

            var index = draggable.index()

            draggable.insertBefore(droppable)
            temp = droppable.detach()
            console.log(index)
            console.log(parent1.children().length)

            if (parent1.children().length == index) {
                droppable.insertAfter(parent1.children().eq(index - 1))
            }

            else {
                droppable.insertBefore(parent1.children().eq(index))
            }

            // renumber
            for (parent of [parent1, parent2]) {
                const rows = parent.children()
                for (let i = 0; i < rows.length; i ++) {
                    rows[i].children[0].innerHTML = i + 1
                }
            }
        }
    })
}
```

![demo](https://github.com/John-sCC/jcc_frontend/assets/112529809/84ced7d7-7c1c-49c6-8ca9-25acdead9f02)

#### Links
* [Key Commit](https://github.com/John-sCC/jcc_frontend/commit/02a8a6aad30104bb3e6b7ca7af56c0029fc22dfe)
* [Pull request](https://github.com/John-sCC/jcc_frontend/pull/45)
* [Live Demo](https://john-scc.github.io/jcc_frontend/tablegenerator)

### Wireframes

Didn't spend too much time here, but I did work on a wireframe because they didn't look great.

![wireframe](https://github.com/John-sCC/jcc_frontend/assets/112529809/059e6643-4bcd-4ad7-b4b2-f2a3c61b5e35)

## Team Management

I have been trying to lead the class with FRQ 1 and make them do exceptional work by suggesting peer reviews in their lessons and making meeting plans for them, however, people are simply not following directions and trying to make things easy for themselves every time.

## Github Analytics:

<ul>
   <li><a href="https://github.com/aidenhuynh?tab=overview&from=2024-02-01&to=2024-03-18">Link to analytics</a></li>
</ul>
<img src="https://github.com/John-sCC/jcc_frontend/assets/112529809/7a89cdb0-03d6-4d82-bde0-30ba95b287e6">

## Future Plans

- Hover animations
- Enter event listeners on most text boxes (i.e. changing name of class)
- Prompt to verify if really want to delete class
- A new dropzone underneath each table to add members to a table without swapping (adding 1 to a 4 person team)