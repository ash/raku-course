---
title: Quiz — Catture
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
if 'ab12cd' ~~ / (\w+) (\d+) / {
    say "$0 $1";
}
```

{:.quiz}
0 | ab 12
1 | ab1 2
0 | ab12 cd
0 | 12 ab

{% include quiz.html %}

<div class="extended-explanation">

Il goloso `\w+` riconosce caratteri di parola finché può, pur lasciando almeno una cifra a `\d+`. Prende `ab1`, e `\d+` riconosce poi l'unica cifra rimasta, `2`. Quindi `$0` è `ab1` e `$1` è `2`.

</div>

{% include nav.html %}
