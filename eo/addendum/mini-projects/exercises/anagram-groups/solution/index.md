---
title: 'Solvo: Grupigu la anagramojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Eligo

```
act cat
dog
enlist listen silent
```

## Komentoj

1. Ordigi la literojn de vorto donas *kanonan ŝlosilon*: ĉiuj anagramoj kunhavas la
samajn ordigitajn literojn, do puŝi sur `%groups{ ... }` kolektas ilin sub unu
ŝlosilo. Post la unua buklo, `say %groups` montras la tutan strukturon — ĉiu
kanona ŝlosilo mapanta al sia listo de vortoj:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Ĉiu haketmapa valoro estas la listo de vortoj en tiu grupo, presata alfabete per
`.sort.join`.

{% include nav.html %}
