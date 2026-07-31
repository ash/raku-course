---
title: Quiz — Praefixus vel postfixus
translations_gpt:
---

{% include menu.html %}

Vidisti `++` *post* variabilem scriptum, ut postfixum. Etiam *ante* eam scribi potest. Quae categoria est `++` in `++$x`?

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

Categoria pure *positione* deciditur. Ante unicum operandum suum scriptus, `++$x` est operator **praefixus** — idem `++` postfixus est cum post scribitur, ut in `$x++`. Ambae formae `$x` incrementant; forma praefixa novum valorem reddit, itaque hoc `6` imprimit.

</div>

{% include nav.html %}
