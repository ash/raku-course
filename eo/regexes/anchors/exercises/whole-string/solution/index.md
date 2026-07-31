---
title: 'Solvo: La tuta ĉeno'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Vi povas trovi la fontkodon en la dosiero [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Eligo

```
True
```

## Komentoj

1. La ankroj `^` kaj `$` fiksas la ŝablonon al la komenco kaj la fino de la ĉeno.

1. Inter ili, `<[a..z]>+` devas respondeci pri ĉiu signo, do ĉeno kun majusklo aŭ spaco, kiel `Hello there`, malsukcesus.

{% include nav.html %}
