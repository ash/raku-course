---
title: 'Решение: Пребройте гласните'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Намерете програмата във файла [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Изход

```
6
```

## Коментари

1. Подаването на регулярен израз на `.comb` връща всеки съвпадащ знак. Класът от знаци
`<[aeiouAEIOU]>` изброява гласните и в двата регистъра.

1. Префиксният `+` поставя получения списък в числов контекст и дава дължината му —
броя на гласните.

{% include nav.html %}
