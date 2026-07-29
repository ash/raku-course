---
title: 'Решение: Частота слов'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Исходный код можно найти в файле [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Вывод

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Комментарии

1. `$text.words` выдаёт слова, а `%freq{$_}++` увеличивает счётчик для каждого, создавая ключ
при первой встрече.

1. Сортировка по `-.value` ставит самые частые слова первыми, а добавление `.key` вторым ключом
сортировки разрешает ничьи по алфавиту, так что порядок полностью определён.

{% include nav.html %}
