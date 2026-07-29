---
title: 'Розв''язання: Увесь рядок'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Вихідний код можна знайти у файлі [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Вивід

```
True
```

## Коментарі

1. Якорі `^` та `$` прикріплюють шаблон до початку й кінця рядка.

1. Між ними `<[a..z]>+` мусить покрити кожен символ, тож рядок із великою літерою чи пробілом, як-от `Hello there`, зазнав би невдачі.

{% include nav.html %}
