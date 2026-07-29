---
title: 'Решение: Най-дългият низ'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Намерете програмата във файла [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Изход

```
elephant
```

## Коментари

1. Блокът запазва по-дългия от двата си аргумента: `$a` е най-дългият низ, видян дотук, `$b` е следващият, а тернарният оператор връща онзи с повече знаци.

1. `reduce` носи този победител нататък като `$a` при следващото извикване, така че след обхождането на целия списък натрупаната стойност е най-дългият низ от всички — `elephant`.

{% include nav.html %}
