---
title: 'Решение: Цензура на дума'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Намерете програмата във файла [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Изход

```
*** *** plan
```

## Коментари

1. Операторът `s///` заменя намереното `secret` с буквалния текст `***`, записан без кавички, и променя `$s` на място.

1. Именно наречието `:g` го кара да замени **и двете** появявания. Без него би било цензурирано само първото `secret`.

{% include nav.html %}
