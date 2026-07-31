---
title: 'Solvo: Kio ĝi estas'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Vi povas trovi la fontkodon en la dosiero [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Eligo

```
True
False
```

## Komentoj

1. `$a.WHAT` ne estas la cheno `Int` sed la efektiva `Int`-tip-objekto, do `=== Int` komparas ghin kontrau la tipo mem kaj redonas `True`.

1. `$b` enhavas chenon, do ghia `WHAT` estas `Str`; kompari tion kun `Int` donas `False`. Tio estas kio faras `WHAT` utila en kondiĉoj, ne nur en presaĵoj.

{% include nav.html %}
