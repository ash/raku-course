---
title: Използвайте модул за статистика
translations_gpt:
---

{% include menu.html %}

## Задача

Даден ви е модул `Stats.rakumod`, който експортира две подпрограми — `total` и `mean` — където `mean` е изградена върху `total`:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Напишете отделна програма, която използва този модул и за списъка `10, 20, 30, 40` отпечатва както сумата, така и средното аритметично.

## Пример

При стартиране с модула в пътя за търсене, програмата отпечатва:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}
