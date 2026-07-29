---
title: 'Solution: Групово ценообразуване'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 Можете да намерите изходния код във файла [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Изход

```
normal price
bulk price
```

## Коментари

1. Първият кандидат има клауза `where`, която приема само количества от 10 или повече, така че извикването `price(25)` се диспечира към него.

1. Вторият кандидат няма условие и действа като уловител, така че `price(3)` отива там.

{% include nav.html %}
