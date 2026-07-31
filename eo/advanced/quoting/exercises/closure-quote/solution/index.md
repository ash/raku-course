---
title: 'Solvo: Fermilo en q-ĉeno'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $x = 10;
say q:c/$x squared is {$x ** 2}/;
```

🦋 Vi povas trovi la fontkodon en la dosiero [closure-quote.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/closure-quote.raku).

## Eligo

```
$x squared is 100
```

## Komentoj

1. La adverbo `:c` (fermo) ŝaltas interpoladon de enkonstruita `{ … }`-kodo en la alie-laŭlitera `q`-formo. Ene de la krampoj, `$x` estas vera kodo, do `{$x ** 2}` taksas al `100`.

1. La `$x` ekster la krampoj restas ĝuste kiel skribita, ĉar la skalara adverbo `:s` *ne* estas ŝaltita. Tio estas la tuta senco de la per-funkciaj adverboj: vi ricevas enkonstruitan kodon sen ankaŭ ŝalti `$`-interpoladon.

1. Adverboj povas esti stakitaj. Aldonu ankaŭ `:s`, kaj la komenca `$x` estas interpolata ankaŭ — ambaŭ funkcioj nun estas ŝaltitaj samtempe:

```raku
my $x = 10;
say q:c:s/$x squared is {$x ** 2}/; # 10 squared is 100
```

{% include nav.html %}
