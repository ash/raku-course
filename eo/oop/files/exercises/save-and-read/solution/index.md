---
title: 'Solvo: Konservu kaj legu'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 Vi povas trovi la fontkodon en la dosiero [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Eligo

```
84
```

## Komentoj

1. `spurt` kreas la dosieron kaj skribas la ĉenon en ĝin; `slurp` relegas la tutan dosieron en ĉenon. Kune ili estas kompleta konserv-kaj-ŝarga ciklo.

1. Kio revenas de `slurp` estas teksto — `"42\n"` — do ni `trim` for la finan linifinon kaj vokas `.Int` por transformi ĝin en nombron antaŭ ol fari aritmetikon. La rezulto, `42 * 2`, estas `84`.

1. La programo tamen ankoraŭ funkcias sen `.trim.Int`.

{% include nav.html %}
