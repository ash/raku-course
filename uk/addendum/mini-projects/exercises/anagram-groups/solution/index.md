---
title: Розв'язання вправи «Згрупуйте анаграми»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @words = <listen silent enlist cat act dog>;
my %groups;

for @words -> $word {
    %groups{ $word.comb.sort.join }.push($word);
}

for %groups.sort(*.key) -> $pair {
    say $pair.value.sort.join(' ');
}
```

🦋 Знайдіть програму у файлі [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Вивід

```
act cat
dog
enlist listen silent
```

## Коментарі

1. Сортування літер слова дає *канонічний ключ*: усі анаграми мають той самий
набір відсортованих літер, тож додавання до `%groups{ ... }` збирає їх під одним
ключем. Після першого циклу `say %groups` показує всю структуру — кожен канонічний
ключ, що відображається на свій список слів:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Кожне значення хеша є списком слів у цій групі, надрукованим за абеткою через
`.sort.join`.

{% include nav.html %}
