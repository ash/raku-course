---
title: 'Quiz — The Stash'
---

{% include menu.html %}

The `Greeting` module exports `hello` and defines `our $version`. What does `Greeting::.keys.sort` return?

{:.quiz}
1 | ($version EXPORT)
0 | ($version)
0 | ($version &hello)
0 | (hello version)

{% include quiz.html %}

<div class="extended-explanation">

`$version` is the module’s `our` variable, listed with its sigil. `EXPORT` is the package Raku adds automatically to carry the `is export` names, so the exported `hello` shows up there rather than as a package name of its own.

</div>

{% include nav.html %}
