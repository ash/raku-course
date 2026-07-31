---
title: Quiz — Metodi di classe
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? Il metodo `n` non usa alcun attributo.

```raku
class T {
    method n { 42 }
}

say T.n + T.new.n;
```

{:.quiz}
0 | 42
1 | 84
0 | (T)
0 | un errore

{% include quiz.html %}

{% include nav.html %}
