---
title: 'Решение: Мека реципрочна стойност'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Намерете програмата във файла [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Изход

```
0.25
undefined
```

## Коментари

1. `reciprocal(4)` връща `1 / 4`, тоест `0.25`, нормално.

1. `reciprocal(0)` извиква `fail`, така че връща `Failure`, който е недефиниран. Операторът `//` връща дясната си страна винаги когато лявата е недефинирана, така че получаваме резервното `undefined`.

1. Използването на `//` се брои за обработка на провала: то проверява за дефинираност, без да използва стойността, така че `Failure` остава мек и никога не се хвърля като истинско изключение.

{% include nav.html %}
