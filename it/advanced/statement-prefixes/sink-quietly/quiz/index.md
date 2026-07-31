---
title: Quiz — Prefissi di istruzione
translations_gpt:
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | A warning, then 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Sommare `10` al `$v` non definito lo tratta come `0`, dando `10`. Normalmente questo stamperebbe anche un avviso "uninitialized value", ma il prefisso `quietly` lo sopprime, quindi viene stampato solo `10`.

</div>

{% include nav.html %}
