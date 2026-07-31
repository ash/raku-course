---
title: Senfinaj sekvencoj
translations_gpt:
---

{% include menu.html %}

Anstataŭigu la finan valoron per `*` kaj la sekvenco fariĝas **senfina** — ĝi havas neniun lastan elementon. Ĉar la listo estas maldiligenta, tio estas tute sekura: nenio estas kalkulata antaŭ ol vi prenas ĝin.

```raku
say (1, 2, 4 ... *).head(5); # (1 2 4 8 16)
```

La serio de potencoj de du daŭras eterne, sed `.head(5)` tiras nur la unuajn kvin. La intervalo `1..*` estas la plej simpla senfina sekvenco — ĉiuj entjeroj ekde unu:

```raku
say (1..*).head(3);          # (1 2 3)
say (1..*).map(* ** 2).head(4); # (1 4 9 16)
```

Vi povas eĉ difini sekvencon per ĝiaj propraj pli fruaj elementoj. La sekvenco de Fibonacci, kie ĉiu nombro estas la sumo de la antaŭaj du, estas fame unulinia:

```raku
my @fib = 1, 1, * + * ... *;
say @fib[^10]; # (1 1 2 3 5 8 13 21 34 55)
```

La fermaĵo `* + *` prenas la du antaŭajn elementojn kaj adicias ilin. Konservi la sekvencon en `@fib` estas en ordo ĉi tie, ĉar la operatoro `...` markas ĝin kiel maldiligentan, do la tabelo ne provas kalkuli ĝin tutan — nur la dek elementoj petitaj per `@fib[^10]` estas iam produktataj.

La ĝenerala regulo: senfina sekvenco estas sekura tiom longe, kiom vi ĉiam tiras el ĝi nur finian tranĉaĵon.

{% include nav.html %}
