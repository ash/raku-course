---
title: Розв'язання вправи «Відфільтруйте потік значень»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Знайдіть програму у файлі [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Вивід

```
[2 4 6]
```

## Коментарі

1. `grep(* %% 2)` дає новий потік, що передає далі лише парні значення, — точно як `grep` фільтрує список.

1. Підключення збирає ці значення в `@out`, даючи `[2 4 6]`.

{% include nav.html %}
