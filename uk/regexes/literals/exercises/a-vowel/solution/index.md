---
title: 'Розв''язання: Голосна'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 'Hello' ~~ / <[aeiou]> /;
```

🦋 Вихідний код можна знайти у файлі [a-vowel.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/a-vowel.raku).

## Вивід

```
｢e｣
```

## Коментарі

1. Клас `<[aeiou]>` перелічує п'ять голосних; він збігається з тією, що трапляється першою.

1. У `Hello` літери `H` у класі немає, тож збіг починається з `e`.

{% include nav.html %}
