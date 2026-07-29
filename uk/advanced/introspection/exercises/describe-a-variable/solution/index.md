---
title: 'Розв''язання: Опишіть змінну'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Вихідний код можна знайти у файлі [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Вивід

```
Str
Scalar
$lang
```

## Коментарі

1. `.^name` повертає тип значення, збереженого в контейнері, тобто `Str`.

1. `.VAR` повертає контейнер, що лежить в основі, а `.^name` для нього повертає `Scalar` — тип самого контейнера.

1. `.VAR.name` повертає ім'я змінної, `$lang`, разом із сигілом. Зверніть увагу, що це метод `name`, а не метаметод `^name`, використаний у перших двох рядках.

{% include nav.html %}
