---
title: Розв'язання вправи «Пропустіть великі числа»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Знайдіть програму у файлі [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Вивід

```
[6 7 8 9 10]
```

## Коментарі

1. Потік надсилає `1..10` у `grep`, який залишає числа, більші за `5`.

1. Результат утікає в `@big` — ціль, що завершує потік.

{% include nav.html %}
