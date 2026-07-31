---
title: Quiz — Smartmatch
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? Nota che questa volta non c'è `so` e la corrispondenza usa la forma `m/.../`.

```raku
say 'the cat sat' ~~ m/sat/;
```

{:.quiz}
0 | True
0 | False
1 | ｢sat｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`m/sat/` riconosce allo stesso modo di `/sat/`. Senza `so` a convertirlo in booleano, lo smartmatch restituisce l'oggetto match stesso, che `say` stampa fra parentesi angolari come `｢sat｣`.

</div>

{% include nav.html %}
