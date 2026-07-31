---
title: 'Solvo: Rulu en fadeno'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Vi povas trovi la fontkodon en la dosiero [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Eligo

```
working
```

## Komentoj

1. `Thread.start` plenumas la blokon sur nova fadeno.

1. `.finish` atendas, ke la fadeno kompletiĝu, do la programo ne finiĝas antaŭ ol `working` estas presita.

{% include nav.html %}
