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

    .main td {
        color: green;
    }

    td {
        color: blue;
    }
</style>

## The Plan:

Change the parent html element's class which will change all of it's children by using SASS inheritance

## How this works:

When writing HTML, elements are placed within each other to create child-parent relationships. For example, in the following table, each cell is the child of the parent row, which is the child of the parent table.

| bam | pow | wham |
| a | b | c |
| d | e | f |

These child-parent relationships can also be seen in the code using indents. Notice how each ``<td>`` is within a ``<tr></tr>`` which are all within the ``<table></table>``.

```html
<table>
    <tr>
        <td>bam</td>
        <td>pow</td>
        <td>wham</td>
    </tr>
    <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
    </tr>
    <tr>
        <td>d</td>
        <td>e</td>
        <td>f</td>
    </tr>
</table>
```

Now for the scss code: This works the same as regular css in which you can choose to style elements based on their type or a "class name"

For example, consider the following code in a .scss file:

```scss
.main {
    background-color: red;

    td {
        color: green;
    }
}

td {
    color: blue;
}
```

This code shows child-parent relationships within SASS files. Can you guess the results of this code?

<table>
    <tr class="main">
        <td>green</td>
        <td>green!</td>
    </tr>
    <tr>
        <td>blue</td>
        <td>blue?</td>
    </tr>
</table>

Only the td elements under main changed to green!

```html
<table>
    <tr class="main">
        <td>green</td>
        <td>green!</td>
    </tr>
    <tr>
        <td>blue</td>
        <td>blue?</td>
    </tr>
</table>
```

## Demonstration:

<div id="main" class="csse-light">
    Sample text
    <b>sampler text</b>
</div>
<button id = "switch" onclick="switchClass()">switch theme!</button>

If we were to upscale this example with a bazillion indentations, we could probably change the whole site's theme!

```scss
.csse-light {
        background-color: blue;

        b {
            color: purple;
        }
    }

.csse-dark {
    background-color: red;

    b {
        color: green;
    }
}
```

```js
function switchClass() {
        var div = document.getElementById('main')

        if (div.className == "csse-light") {
            div.className = "csse-dark"
        }

        else {
            div.className = "csse-light"
        }
    }
```

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