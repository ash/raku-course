---
title: 'Solvo: Cenzuru vorton'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Vi povas trovi la fontkodon en la dosiero [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Eligo

```
*** *** plan
```

## Komentoj

1. La operatoro `s///` anstataŭigas la kongruintan `secret` per la laŭlitera teksto `***`, skribita sen citiloj, kaj ŝanĝas `$s` surloke.

1. La adverbo `:g` estas tio, kio igas ĝin anstataŭigi **ambaŭ** aperojn. Sen ĝi, nur la unua `secret` estus cenzurita.

{% include nav.html %}
