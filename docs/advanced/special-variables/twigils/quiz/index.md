---
title: 'Quiz — Twigils'
---

{% include menu.html %}

Which twigil marks a **dynamic** variable, looked up through the call stack?

{:.quiz}
1 | `*`
0 | `?`
0 | `!`
0 | `.`

{% include quiz.html %}

<div class="extended-explanation">

The `*` twigil marks a dynamic variable, as in `$*OUT` or `$*greeting`. The `?` twigil is for compile-time values, `!` for a private attribute, and `.` for an attribute’s accessor.

</div>

{% include nav.html %}
