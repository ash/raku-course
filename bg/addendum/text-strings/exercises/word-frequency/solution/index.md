---
title: 'Решение: Честота на думите'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Намерете програмата във файла [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Изход

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Коментари

1. `$text.words` дава думите; `%freq{$_}++` увеличава брояч за всяка от тях, като
създава ключа при първата среща.

1. Сортирането по `-.value` слага най-честите отпред; добавянето на `.key` като второ
поле за сортиране разрешава равенствата по азбучен ред, така че подредбата е напълно
детерминирана.

{% include nav.html %}
