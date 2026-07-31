---
title: 'Solvo: Nombru la liniojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Vi povas trovi la fontkodon en la dosiero [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Eligo

```
4
```

## Komentoj

1. `.IO.lines` redonas la liniojn de la dosiero kiel liston.

1. `.elems` kalkulas ilin, donante `4`.

{% include nav.html %}
