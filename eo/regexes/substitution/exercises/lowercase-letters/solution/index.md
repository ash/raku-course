---
title: 'Solvo: Minusklaj literoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Vi povas trovi la fontkodon en la dosiero [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Eligo

```
raku
```

## Komentoj

1. `tr///` mapas ĉiun signon en la unua intervalo al la signo ĉe la sama pozicio en la dua.

1. Ĉi tie la intervaloj iras de la majuskloj al la minuskloj, do ĉiu majusklo estas anstataŭigita per sia minuskla partnero — la kontraŭa direkto al majuskligo.

{% include nav.html %}
