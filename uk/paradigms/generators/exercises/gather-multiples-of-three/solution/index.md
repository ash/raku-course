---
title: Розв'язання вправи «Зберіть кратні трьом»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Знайдіть програму у файлі [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Вивід

```
[3 6 9 12 15]
```

## Коментарі

1. Цикл відвідує кожне число, але `take` виконується лише тоді, коли `$_ %% 3` істинне.

1. Тож у список збираються самі числа, кратні трьом.

{% include nav.html %}
