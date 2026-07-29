---
title: Розв'язання вправи «Два потоки»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Знайдіть програму у файлі [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Вивід

```
500
```

## Коментарі

1. Два потоки працюють конкурентно, і кожен записує свій результат у власну спільну змінну.

1. Читання `$x` та `$y` відбувається лише **після** обох викликів `.finish`, тож результати гарантовано готові: `100 + 400` дорівнює `500`. Саме приєднання перед читанням робить значення надійним.

{% include nav.html %}
