---
title: 'Решение: Изпълнено или счупено'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Намерете програмата във файла [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Изход

```
Kept
```

## Коментари

1. След като блокът приключи успешно, обещанието става _изпълнено_.

1. `.status` съобщава това като `Kept`. Ако блокът беше хвърлил изключение, състоянието щеше да е `Broken`.

{% include nav.html %}
