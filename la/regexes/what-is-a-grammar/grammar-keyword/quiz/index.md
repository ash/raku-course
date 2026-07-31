---
title: Quiz — Quid sit grammatica
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my token greet { 'hi' }

say so 'hi there' ~~ / <greet> /;
```

{:.quiz}
1 | True
0 | False
0 | ｢greet｣
0 | hi

{% include quiz.html %}

<div class="extended-explanation">

Tessera nominata `greet` textum litteralem `hi` congruit. Eam ut `<greet>` intra exemplar vocans illum textum quaeris, qui in initio `'hi there'` adest, itaque congruentia succedit et `so` `True` reddit.

</div>

{% include nav.html %}
