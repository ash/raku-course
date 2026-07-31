---
title: Quiz — Attributi
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
class P {
    has $.x = 7;
    has $.y;
}

say P.new(x => 1).y;
```

{:.quiz}
0 | 1
0 | 7
1 | (Any) | Il programma vuole stampare `y`, che non è mai stato impostato
0 | un errore

{% include quiz.html %}

{% include nav.html %}
