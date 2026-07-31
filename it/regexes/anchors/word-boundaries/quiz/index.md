---
title: Quiz — Ancore
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
say so 'I have a dog' ~~ /<< dog >>/;
```

{:.quiz}
1 | True
0 | False
0 | ｢dog｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Lo schema richiede che `dog` sia una parola intera. In `I have a dog` la parola `dog` sta da sola, con uno spazio prima e la fine della stringa dopo, quindi c'è un confine di parola da entrambi i lati, la corrispondenza riesce e `so` restituisce `True`.

</div>

{% include nav.html %}
