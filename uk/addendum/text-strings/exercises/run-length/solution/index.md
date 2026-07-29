---
title: Розв'язання вправи «Кодування довжин серій»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Знайдіть програму у файлі [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Вивід

```
a3b4c2
```

## Коментарі

1. Шаблон `(.) $0*` захоплює один символ, а потім зіставляється зі стількома
його дальшими копіями, скільки їх іде поспіль, — по цілій серії на збіг. `m:g`
збирає кожну серію.

1. Для кожної серії `$match[0]` є повторюваною літерою, а `$match.chars` — тим,
якою довгою є серія, тож удвох вони дають записи на кшталт `a3`.

1. Називати збіг через `-> $match` необов'язково. Без цього кожен збіг стає
темою `$_`, і змінну можна прибрати, викликаючи методи просто на ній:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
