---
title: 'Решение: Шифър на Цезар'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Намерете програмата във файла [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Изход

```
KHOOR
```

## Коментари

1. Операторът за транслитерация `tr///` съпоставя знаците от първото множество с
второто, позиция по позиция. `A..Z` се подрежда срещу `D..ZA..C`, така че `A` става
`D`, `B` става `E`, а опашката `X Y Z` се завърта обратно към `A B C`.

1. `tr///` променя низа на място, така че `$text` сам съдържа шифрованата дума след
съпоставянето.

{% include nav.html %}
