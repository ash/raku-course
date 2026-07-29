---
title: 'Розв''язання: Слово або цифра'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Вихідний код можна знайти у файлі [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Вивід

```
｢5｣
```

## Коментарі

1. Альтернатива поєднує літерал `cat` із класом символів `\d`. Шаблон зіставляється з тією альтернативою, яку знайдено в рядку першою.

1. У `item 5` немає `cat`, зате є цифра, тож `\d` зіставляється з `5`.

{% include nav.html %}
