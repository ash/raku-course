---
title: 'Решение: Кодиране по дължина на серии'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Намерете програмата във файла [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Изход

```
a3b4c2
```

## Коментари

1. Шаблонът `(.) $0*` прихваща един знак, а после съпоставя толкова негови следващи
копия, колкото има — по цяла серия на съвпадение. `m:g` събира всяка серия.

1. За всяка серия `$match[0]` е повтарящата се буква, а `$match.chars` е дължината на
серията, така че двете заедно дават записи като `a3`.

1. Именуването на съвпадението с `-> $match` е незадължително. Без него всяко съвпадение
става темата `$_` и можете да махнете променливата, като извиквате методите направо
върху нея:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
