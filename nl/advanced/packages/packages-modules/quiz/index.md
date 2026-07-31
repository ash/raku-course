---
title: Quiz — Pakketten
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
module M {
    my $x = 5;
}

say $M::x.defined;
```

{:.quiz}
1 | False
0 | True
0 | 5
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

`$x` is gedeclareerd met `my`, dus het is lexicaal en komt nooit in de `M`-naamruimte terecht. Het pad `$M::x` vindt daarom niets — een ongedefinieerde waarde — en `.defined` geeft `False`. Alleen een `our`-variabele zou op deze manier bereikbaar zijn.

</div>

{% include nav.html %}
