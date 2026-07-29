---
title: 'Решение: Две нишки'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Намерете програмата във файла [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Изход

```
500
```

## Коментари

1. Двете нишки вървят паралелно и всяка записва резултата си в своя собствена споделена променлива.

1. Четенето на `$x` и `$y` става едва **след** двете извиквания на `.finish`, така че резултатите гарантирано са готови: `100 + 400` е `500`. Именно присъединяването преди четенето прави стойността надеждна.

{% include nav.html %}
