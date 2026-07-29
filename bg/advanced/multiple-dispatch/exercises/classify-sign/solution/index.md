---
title: 'Solution: Класифицирайте размера'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Можете да намерите изходния код във файла [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Изход

```
small
medium
large
```

## Коментари

1. И трите кандидата приемат единичен `Int`, така че без клаузите `where` те биха се сблъскали. Условията на първите два ги правят различни, а третият е уловителят.

1. Клаузите `where` проверяват `$n.abs`, така че само големината определя резултата и знакът се игнорира. `size(7)` съвпада с първия кандидат (`small`), докато `size(-250)` има абсолютна стойност `250`, което не удовлетворява нито едно от двете условия и попада в уловителя (`large`).

1. Кандидатите се проверяват от най-специфичния към най-общия — точно в реда, в който са написани тук.

{% include nav.html %}
