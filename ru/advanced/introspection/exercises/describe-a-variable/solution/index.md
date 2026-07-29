---
title: 'Решение: Описание переменной'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Исходный код можно найти в файле [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Вывод

```
Str
Scalar
$lang
```

## Комментарии

1. `.^name` возвращает тип значения, хранящегося в контейнере, — `Str`.

1. `.VAR` возвращает базовый контейнер, а `.^name` на нём возвращает `Scalar` — тип самого контейнера.

1. `.VAR.name` возвращает имя переменной `$lang`, включая сигил. Обратите внимание, что это метод `name`, а не мета-метод `^name`, использованный в двух предыдущих строках.

{% include nav.html %}
