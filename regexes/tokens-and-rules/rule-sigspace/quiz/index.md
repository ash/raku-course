---
title: 'Quiz — Tokens and rules'
---

{% include menu.html %}

Which keyword should you use for a named pattern that must match **whitespace** between its parts, the way it is written in the pattern?

{:.quiz}
0 | `regex`
0 | `token`
1 | `rule`
0 | `grammar`

{% include quiz.html %}

<div class="extended-explanation">

A `rule` is a `token` with significant whitespace turned on, so the spaces written between its parts must appear in the input. A plain `token` ignores those spaces, and `regex` does too (while also backtracking).

</div>

{% include nav.html %}
