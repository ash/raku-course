---
title: Розв'язання вправи «Видобудьте й підсумуйте числа»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Знайдіть програму у файлі [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Вивід

```
numbers: 12 3 25
sum: 40
```

## Коментарі

1. Передавання регексу `/\d+/` у `.comb` повертає кожну послідовність цифр окремим
рядком, ігноруючи слова між ними.

1. `[+] @numbers` їх додає, дорогою перетворюючи рядки з цифр на числа.

{% include nav.html %}
