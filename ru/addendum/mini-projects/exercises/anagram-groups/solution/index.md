---
title: 'Решение: Сгруппируйте анаграммы'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Вывод

```
act cat
dog
enlist listen silent
```

## Комментарии

1. Отсортированные буквы слова дают *канонический ключ*: у всех анаграмм он одинаков, поэтому
добавление в `%groups{ ... }` собирает их под одним ключом. После первого цикла `say %groups`
показывает всю структуру — каждый канонический ключ и его список слов:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Каждое значение хеша — список слов этой группы, который печатается по алфавиту
через `.sort.join`.

{% include nav.html %}
