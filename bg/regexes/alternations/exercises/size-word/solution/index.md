---
title: 'Решение: Дума за размер'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say 'a large pizza' ~~ / small | medium | large /;
```

🦋 Намерете програмата във файла [size-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/size-word.raku).

## Изход

```
｢large｣
```

## Коментари

1. Алтернативата изброява три възможности; шаблонът съпоставя онази от тях, която присъства в низа.

1. Появява се само `large`, така че точно това е съвпадението.

{% include nav.html %}
