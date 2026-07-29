---
title: 'Розв''язання: Слово розміру'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 'a large pizza' ~~ / small | medium | large /;
```

🦋 Вихідний код можна знайти у файлі [size-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/size-word.raku).

## Вивід

```
｢large｣
```

## Коментарі

1. Альтернатива перелічує три можливості; шаблон зіставляється з тією, що присутня в рядку.

1. Трапляється лише `large`, тож саме це й є збігом.

{% include nav.html %}
