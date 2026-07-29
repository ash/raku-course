---
title: 'Розв''язання: Знайдіть символ'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

Програма `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Вивід

```console
$ raku -I. lookup.raku
3.14
```

## Коментарі

1. `Circle::` є stash модуля, і використання імені як ключа — `Circle::{'$pi'}` — дістає збережене під ним значення. Ключ мусить містити сигіл, так само як і перелічені імена.

1. Це дістає те саме значення, що й кваліфіковане `$Circle::pi`, але, оскільки ім'я є звичайним рядком, його можна обчислити під час виконання, а не виписувати у вихідному коді.

{% include nav.html %}
