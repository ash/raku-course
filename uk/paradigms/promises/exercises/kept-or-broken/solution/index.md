---
title: Розв'язання вправи «Виконана чи зламана»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Знайдіть програму у файлі [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Вивід

```
Kept
```

## Коментарі

1. Після того як блок успішно завершується, обіцянка стає _виконаною_.

1. `.status` повідомляє про це як `Kept`. Якби блок кинув виняток, станом натомість було б `Broken`.

{% include nav.html %}
