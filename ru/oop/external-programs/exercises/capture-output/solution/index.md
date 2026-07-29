---
title: 'Решение: Захватите вывод'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Исходный код можно найти в файле [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Вывод

```
3
```

## Комментарии

1. `:out` перенаправляет вывод программы в `Proc`, а не на экран, а `.out.slurp(:close)` читает
его целиком обратно; `.trim` убирает завершающий перевод строки, который добавляет `echo`.

1. Как только вывод стал обычной строкой в нашей программе, мы обращаемся с ним как с любыми
другими данными: `.words.elems` разбивает его по пробельным символам и считает части, давая `3`.
В этом и смысл захвата — внешняя программа становится строительным блоком, результат которого
мы обрабатываем дальше.

{% include nav.html %}
