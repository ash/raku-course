---
title: 'Solvo: Dosiero aŭ dosierujo?'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Vi povas trovi la fontkodon en la dosiero [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Eligo

```
True
False
```

## Komentoj

1. `.f` testas ordinaran dosieron, do ĝi redonas `True` por `a.txt`.

1. `.d` testas dosierujon. Demandita pri la tute sama vojo, ĝi redonas `False`, ĉar `a.txt` estas dosiero, ne dosierujo. La du testoj estas komplementaj, kio estas la maniero distingi dosieron kaj dosierujon.

{% include nav.html %}
