---
title: 'Solution: Сума със сигил `&`'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Можете да намерите изходния код във файла [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Изход

```
5
```

## Коментари

1. Стрелковият блок изброява два параметъра, `-> $a, $b`, така че анонимната подпрограма приема два аргумента.

1. Тъй като променливата е декларирана със сигила `&`, тя може да бъде извикана като `add(2, 3)` точно както именувана подпрограма -- без сигил на мястото на извикване -- и дава `5`.

{% include nav.html %}
