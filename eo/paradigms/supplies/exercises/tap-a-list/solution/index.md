---
title: 'Solvo: Konektiĝu al listo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Vi povas trovi la fontkodon en la dosiero [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Eligo

```
red
green
blue
```

## Komentoj

1. `Supply.from-list` eligas la tri ĉenojn laŭvice.

1. La konekto plenumiĝas unufoje por ĉiu el ili, presante ĝin.

{% include nav.html %}
