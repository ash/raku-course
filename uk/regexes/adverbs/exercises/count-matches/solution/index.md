---
title: Розв'язання вправи «Порахуйте збіги»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Знайдіть програму у файлі [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Вивід

```
5
```

## Коментарі

1. Клас символів `<[aeiou]>` зіставляється з однією голосною, а прислівник `:g` повертає кожен такий збіг, а не лише перший.

1. Результат поводиться як список, тож `.elems` рахує збіги: п'ять голосних у слові `education` (e, u, a, i, o).

{% include nav.html %}
