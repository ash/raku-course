---
title: 'Solvo: Ĉu ĝi ekzistas?'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Vi povas trovi la fontkodon en la dosiero [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Eligo

```
False
True
```

## Komentoj

1. `.e` testas, ĉu vojo ekzistas. La unua kontrolo ruliĝas antaŭ ol la dosiero estas kreita, do ĝi redonas `False`.

1. `spurt` poste kreas `test.txt`, kaj la dua kontrolo sur la *sama* vojo nun redonas `True`. Demandi la vojobjekton denove spegulas la nunan staton de la dosiersistemo.

{% include nav.html %}
