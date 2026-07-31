---
title: Quiz — Quantificatori di base
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? Nota il quantificatore `*` sulla `a`.

```raku
say 'br' ~~ / b a* r /;
```

{:.quiz}
1 | ｢br｣
0 | ｢bar｣
0 | False
0 | ｢b｣

{% include quiz.html %}

<div class="extended-explanation">

`*` significa «zero o più volte», quindi `a*` è contento di non riconoscere alcuna `a`. In `br` non c'è alcuna `a` fra la `b` e la `r`, ma lo schema corrisponde comunque perché sono ammesse zero ripetizioni, dando `｢br｣`.

</div>

{% include nav.html %}
