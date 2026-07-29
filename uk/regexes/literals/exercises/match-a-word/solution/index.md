---
title: 'Розв''язання: Зіставте фразу'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 Вихідний код можна знайти у файлі [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Вивід

```
｢love Raku｣
```

## Коментарі

1. Пробіл між словами тут значущий, тож фразу взято в лапки: `'love Raku'`. Без лапок механізм регексів проігнорував би пробіл і шукав би `loveRaku`, чого в рядку немає.

1. Розумне зіставлення повертає об'єкт збігу, що покриває всю взяту в лапки фразу, і `say` виводить його між кутовими дужками.

{% include nav.html %}
