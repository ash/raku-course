---
title: 'Solution: Акроним'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Можете да намерите изходния код във файла [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Изход

```
HTML
```

## Коментари

1. `$phrase.words` дава списък от думите. Цикълът взема първия символ от всяка дума чрез `substr(0, 1)` и го добавя към `$acronym`.

1. След като всички начални букви са събрани, `uc` превръща резултата в главни букви: `HTML`.

{% include nav.html %}
