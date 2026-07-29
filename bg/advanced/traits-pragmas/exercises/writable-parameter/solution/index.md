---
title: 'Solution: Записваем параметър'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Можете да намерите изходния код във файла [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Изход

```
42
```

## Коментари

1. `is rw` свързва параметъра `$n` с променливата на извикващия `$score`, така че `$n *= 2` вътре в `double` променя самата `$score` — затова се отпечатва `42`.

1. Без `is rw` параметърът би бил само за четене и `$n *= 2` би била грешка при компилация. Маркирането с `is copy` вместо това би дало на `double` частно копие за промяна, оставяйки `$score` непроменена на `21`.

{% include nav.html %}
