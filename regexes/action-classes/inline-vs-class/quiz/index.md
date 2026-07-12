---
title: 'Quiz — Action classes'
---

{% include menu.html %}

How do you tell `.parse` to use an action class called `MyActions`?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

The action object is passed with the `actions` named argument, and it must be an **instance**, created with `.new`. As the grammar parses, the matching token methods on that instance run and build the result.

</div>

{% include nav.html %}
