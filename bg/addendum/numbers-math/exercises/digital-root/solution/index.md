---
title: 'Решение: Цифров корен'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Намерете програмата във файла [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Изход

```
3
```

## Коментари

1. `$n.comb` разбива числото на отделните му знаци-цифри; `[+]` ги събира, като
автоматично превръща низовете в числа.

1. Цикълът се повтаря, докато резултатът още има повече от една цифра, така че спира
веднага щом `$n` падне под `10`.

{% include nav.html %}
