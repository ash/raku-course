---
title: Autothreading
translations_gpt:
---

{% include menu.html %}

Quando passi una junction a qualcosa che si aspetta un valore singolo — un confronto o una funzione ordinaria — Raku applica in silenzio quell'operazione a **ogni** valore dietro la junction e riunisce i risultati in una junction. Questo si chiama _autothreading_.

Per esempio, sommare a una junction somma a ciascuno dei suoi valori:

```raku
my $j = 1 | 2 | 3;
say $j + 10; # any(11, 12, 13)
```

Il `+ 10` è stato applicato a `1`, `2` e `3` separatamente, dando una nuova junction _any_ `any(11, 12, 13)`.

Con un confronto, il risultato riunito collassa in un unico valore di verità secondo il genere della junction:

```raku
say so all(3, 7, 2) > 0;  # True  — every value is positive
say so all(3, -1, 2) > 0; # False — not all are positive
say so none(1, 2, 3) == 5; # True — none of them is 5
```

L'autothreading è ciò che rende le junction così concise: un unico confronto controlla molti valori. Concettualmente i controlli sono indipendenti, quindi Raku è libero di eseguirli in parallelo — ed è per questo che le junction stanno naturalmente nell'armamentario della concorrenza.

{% include nav.html %}
