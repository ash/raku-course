---
title: Quiz — Präfix oder Postfix
translations_gpt:
---

{% include menu.html %}

Sie haben gesehen, dass `++` *nach* einer Variablen geschrieben wird, als Postfix. Es kann auch *vor* ihr geschrieben werden. Welcher Kategorie gehört `++` in `++$x` an?

```raku
my $x = 5;
say ++$x;
```

{:.quiz}
1 | prefix
0 | postfix
0 | infix
0 | postcircumfix

{% include quiz.html %}

<div class="extended-explanation">

Die Kategorie wird rein durch die *Position* bestimmt. Vor seinem einzelnen Operanden geschrieben, ist `++$x` ein **Präfix**-Operator — dasselbe `++` ist ein Postfix, wenn es danach geschrieben wird, wie in `$x++`. Beide Formen inkrementieren `$x`; die Präfix-Form gibt den neuen Wert zurück, sodass hier `6` ausgegeben wird.

</div>

{% include nav.html %}
