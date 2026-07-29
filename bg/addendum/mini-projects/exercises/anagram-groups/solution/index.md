---
title: 'Решение: Групирайте анаграмите'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Изход

```
act cat
dog
enlist listen silent
```

## Коментари

1. Сортирането на буквите на думата дава *каноничен ключ*: всички анаграми споделят едни
и същи сортирани букви, така че добавянето към `%groups{ ... }` ги събира под един ключ.
След първия цикъл `say %groups` показва цялата структура — всеки каноничен ключ,
съпоставен със своя списък от думи:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Всяка стойност в хеша е списъкът с думите в тази група, отпечатан по азбучен ред с
`.sort.join`.

{% include nav.html %}
