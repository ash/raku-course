---
title: 'Solvo: Kunigu kaj atendu'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Vi povas trovi la fontkodon en la dosiero [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Eligo

```
first
second
```

## Komentoj

1. `.finish` blokas ĝis la fadeno presis `first`.

1. Nur tiam la ĉefa programo daŭrigas kaj presas `second`, do la ordo estas garantiita. Sen `.finish` la du linioj povus aperi en ajna ordo.

{% include nav.html %}
