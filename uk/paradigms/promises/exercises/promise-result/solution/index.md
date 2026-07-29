---
title: Розв'язання вправи «Зчепіть обіцянку»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Знайдіть програму у файлі [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Вивід

```
RAKU!
```

## Коментарі

1. Кожен `.then` будує нову обіцянку, що виконується, щойно завершиться попередня. Усередині її блоку `.result` є значенням, яке дала попередня обіцянка.

1. Перше продовження переводить `'raku'` у `'RAKU'`; друге додає `'!'`. Очікування останньої обіцянки, `$r`, проходить увесь ланцюжок і дає `'RAKU!'` — невеличкий конвеєр, у якому кожен крок перетворює результат попереднього.

{% include nav.html %}
