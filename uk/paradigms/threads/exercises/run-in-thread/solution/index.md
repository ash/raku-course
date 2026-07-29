---
title: Розв'язання вправи «Виконайте в потоці»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Знайдіть програму у файлі [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Вивід

```
working
```

## Коментарі

1. `Thread.start` виконує блок у новому потоці.

1. `.finish` чекає завершення потоку, тож програма не завершиться раніше, ніж надрукується `working`.

{% include nav.html %}
