---
title: 'Розв''язання: Друк без переходу рядка'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
$*OUT.print('a');
$*OUT.print('b');
$*OUT.say('c');
```

🦋 Вихідний код можна знайти у файлі [print-without-newline.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/print-without-newline.raku).

## Вивід

```
abc
```

## Коментарі

1. `$*OUT.print` пише свій текст, не додаючи переходу рядка, тож `a` та `b` лишаються в тому самому рядку.

1. `$*OUT.say` пише `c`, а потім перехід рядка, завершуючи рядок `abc`.

{% include nav.html %}
