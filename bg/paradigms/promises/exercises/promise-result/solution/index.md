---
title: 'Решение: Свържете обещание'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Намерете програмата във файла [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Изход

```
RAKU!
```

## Коментари

1. Всяко `.then` изгражда ново обещание, което се изпълнява, щом предишното приключи. Вътре в блока му `.result` е стойността, дадена от предишното обещание.

1. Първото продължение превръща `'raku'` в `'RAKU'`; второто добавя `'!'`. Изчакването на последното обещание `$r` минава по цялата верига и дава `'RAKU!'` — малък конвейер, в който всяка стъпка преобразува резултата на предишната.

{% include nav.html %}
