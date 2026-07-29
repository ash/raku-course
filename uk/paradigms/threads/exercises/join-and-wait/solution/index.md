---
title: Розв'язання вправи «Приєднайте й дочекайтеся»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Знайдіть програму у файлі [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Вивід

```
first
second
```

## Коментарі

1. `.finish` блокує виконання, аж поки потік не надрукує `first`.

1. Лише після цього головна програма продовжується й друкує `second`, тож порядок гарантовано. Без `.finish` ці два рядки могли б з'явитися в будь-якому порядку.

{% include nav.html %}
