---
title: Розв'язання вправи «Частота слів»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Знайдіть програму у файлі [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Вивід

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Коментарі

1. `$text.words` дає слова; `%freq{$_}++` збільшує лічильник для кожного,
створюючи ключ під час першої зустрічі.

1. Сортування за `-.value` ставить найчастіші попереду; додавання `.key` другим
полем сортування розводить нічиї за абеткою, тож порядок цілком детермінований.

{% include nav.html %}
