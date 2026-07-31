---
title: 'Solvo: Ĉu primo aŭ ne'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 97.is-prime;
say 91.is-prime;
```

🦋 Vi povas trovi la fontkodon en la dosiero [prime-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/prime-check.raku).

## Eligo

```
True
False
```

## Komentoj

1. `97` havas neniujn divisorojn krom `1` kaj si mem, do `is-prime` redonas `True`.

1. `91` ŝajnas primo, sed estas `7 x 13`, do `is-prime` redonas `False`. La metodo faras la faktoradon por vi, kaj tio estas la tuta celo de ĝia ekzisto.

{% include nav.html %}
