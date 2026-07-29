---
title: Вправа «Скористайтеся модулем статистики»
translations_gpt:
---

{% include menu.html %}

## Завдання

Вам дано модуль `Stats.rakumod`, який експортує дві підпрограми — `total` та `mean`, — де `mean` побудовано поверх `total`:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Напишіть окрему програму, яка використовує цей модуль і для списку `10, 20, 30, 40` виводить і суму, і середнє.

## Приклад

Запущена з модулем на шляху пошуку, програма виводить:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}
