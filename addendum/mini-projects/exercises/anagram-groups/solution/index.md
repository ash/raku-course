---
title: The solution of ’Group the anagrams‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

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

🦋 You can find the source code in the file [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Output

```
act cat
dog
enlist listen silent
```

## Comments

1. Sorting a word’s letters gives a *canonical key*: all anagrams share the same
sorted letters, so pushing onto `%groups{ ... }` gathers them under one key. After
the first loop, `say %groups` shows the whole structure — each canonical key
mapping to its list of words:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Each hash value is the list of words in that group, printed alphabetically with
`.sort.join`.

{% include nav.html %}
