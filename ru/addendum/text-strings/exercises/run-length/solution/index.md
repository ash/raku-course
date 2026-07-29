---
title: 'Решение: Кодирование длин серий'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Исходный код можно найти в файле [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Вывод

```
a3b4c2
```

## Комментарии

1. Шаблон `(.) $0*` захватывает один символ, а затем сопоставляется со всеми его копиями, идущими
следом, — одна целая серия на совпадение. `m:g` собирает все серии.

1. Для каждой серии `$match[0]` — это повторяющаяся буква, а `$match.chars` — её длина, так что
вместе они дают записи вроде `a3`.

1. Именовать совпадение через `-> $match` необязательно. Без этого каждое совпадение становится
текущим значением `$_`, и переменную можно опустить, вызывая методы прямо на нём:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
