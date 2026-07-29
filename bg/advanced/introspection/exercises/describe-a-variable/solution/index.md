---
title: 'Solution: Опишете променлива'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Намерете програмата във файла [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Резултат

```
Str
Scalar
$lang
```

## Коментари

1. `.^name` връща типа на стойността, съхранена в контейнера, който е `Str`.

1. `.VAR` връща основния контейнер, а `.^name` върху него връща `Scalar` — типа на самия контейнер.

1. `.VAR.name` връща името на променливата, `$lang`, включително нейния сигил. Забележете, че това е методът `name`, а не мета-методът `^name`, използван на първите два реда.

{% include nav.html %}
