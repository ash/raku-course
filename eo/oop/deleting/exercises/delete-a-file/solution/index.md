---
title: 'Solvo: Forigu dosieron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Vi povas trovi la fontkodon en la dosiero [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Eligo

```
True
False
```

## Komentoj

1. `spurt` kreas la dosieron, do la unua testo `.e` raportas `True`.

1. `unlink` forigas ĝin. La dua testo `.e` tiam raportas `False`, ĉar la dosiero malaperis. Notu la uzon de `.e` anstataŭ `.f`: la tipa testo `.f` ĵetus sur vojo, kiu ne plu ekzistas, dum `.e` simple respondas `False`.

{% include nav.html %}
