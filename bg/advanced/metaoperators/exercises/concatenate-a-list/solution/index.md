---
title: 'Solution: Построете URL'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Можете да намерите пълния код във файла [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Резултат

```
http://example.com
18
```

## Коментари

1. Масивът е записан с формата за цитиране с ъглови скоби `<...>`, което е същото като `'http', '://', 'example', '.com'`.

1. Метаоператорът за редукция `[~]` поставя оператора за конкатенация на низове `~` между всички елементи, така че `[~] @parts` слепва четирите части в единичния низ `http://example.com`.

1. Съхраняването на резултата в `$url` ни позволява да го преизползваме: `$url.chars` след това показва, че сглобеният URL е с дължина `18` символа.

{% include nav.html %}
