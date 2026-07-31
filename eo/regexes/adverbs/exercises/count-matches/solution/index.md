---
title: 'Solvo: Nombru la kongruojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Vi povas trovi la fontkodon en la dosiero [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Eligo

```
5
```

## Komentoj

1. La signoklaso `<[aeiou]>` kongruas kun unu vokalo, kaj la adverbo `:g` redonas ĉiun tian kongruon anstataŭ nur la unuan.

1. La rezulto kondutas kiel listo, do `.elems` kalkulas la kongruojn: la kvin vokaloj en `education` (e, u, a, i, o).

{% include nav.html %}
