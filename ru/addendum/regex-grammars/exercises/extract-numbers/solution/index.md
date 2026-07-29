---
title: 'Решение: Извлеките и просуммируйте числа'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Исходный код можно найти в файле [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Вывод

```
numbers: 12 3 25
sum: 40
```

## Комментарии

1. Переданное в `.comb` регулярное выражение `/\d+/` возвращает каждую цепочку цифр отдельной
строкой, не обращая внимания на слова между ними.

1. `[+] @numbers` складывает их, попутно превращая строки из цифр в числа.

{% include nav.html %}
