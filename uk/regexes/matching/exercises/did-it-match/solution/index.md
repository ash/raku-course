---
title: 'Розв''язання: Чи збіглося?'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say so 'Hello, World' ~~ /World/;
```

🦋 Вихідний код можна знайти у файлі [did-it-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/did-it-match.raku).

## Вивід

```
True
```

## Коментарі

1. Успішний збіг є істинним значенням, але виводиться як об'єкт збігу. Функція `so` перетворює його на звичайні `True` чи `False`.

{% include nav.html %}
