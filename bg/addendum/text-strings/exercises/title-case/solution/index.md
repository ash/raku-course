---
title: 'Решение: Всяка дума с главна буква'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Намерете програмата във файла [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Изход

```
The Lord Of The Rings
```

## Коментари

1. `.tc` („title-case“) прави първата буква на низа главна. Хипероператорът `>>.tc`
го прилага наведнъж към всяка дума, а `.join(' ')` сглобява изречението обратно.

{% include nav.html %}
