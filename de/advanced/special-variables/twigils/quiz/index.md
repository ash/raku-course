---
title: Quiz — Twigils
---

{% include menu.html %}

Welches Twigil kennzeichnet eine **dynamische** Variable, die über den Aufrufstapel aufgelöst wird?

{:.quiz}
1 | `*`
0 | `?`
0 | `!`
0 | `.`

{% include quiz.html %}

<div class="extended-explanation">

Das `*`-Twigil kennzeichnet eine dynamische Variable, wie in `$*OUT` oder `$*greeting`. Das `?`-Twigil steht für Kompilierzeit-Werte, `!` für ein privates Attribut und `.` für den Accessor eines Attributs.

</div>

{% include nav.html %}
