---
title: 'Solution: Съпоставяне по тип'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Можете да намерите изходния код във файла [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Изход

```
rational
```

## Коментари

1. Когато стойността за съвпадение е тип, умното съвпадение проверява дали темата *е от този тип*. `3.14` не е `Int`, затова първият `when` се пропуска.

1. Десетичен литерал като `3.14` е `Rat` (рационално число) в Raku, така че вторият `when` съвпада и програмата отпечатва `rational`.

{% include nav.html %}
