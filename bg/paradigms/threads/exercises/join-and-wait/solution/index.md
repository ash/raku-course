---
title: 'Решение: Присъединете и изчакайте'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Намерете програмата във файла [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Изход

```
first
second
```

## Коментари

1. `.finish` блокира, докато нишката не отпечата `first`.

1. Едва тогава основната програма продължава и отпечатва `second`, така че редът е гарантиран. Без `.finish` двата реда можеха да се появят в произволен ред.

{% include nav.html %}
