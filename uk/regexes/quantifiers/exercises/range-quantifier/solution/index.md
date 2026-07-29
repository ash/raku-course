---
title: 'Розв''язання: Від двох до чотирьох'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Вихідний код можна знайти у файлі [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Вивід

```
｢abcd｣
```

## Коментарі

1. `\w ** 2..4` збігається з двома-чотирма словесними символами.

1. Будучи жадібним, він бере стільки, скільки дозволяє діапазон, — чотири, — тож збігом є `abcd`.

{% include nav.html %}
