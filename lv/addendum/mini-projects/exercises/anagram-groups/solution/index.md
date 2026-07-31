---
title: 'Risinājums: Sagrupējiet anagrammas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Izvade

```
act cat
dog
enlist listen silent
```

## Komentāri

1. Vārda burtu sakārtošana dod *kanonisku atslēgu*: visām anagrammām sakārtotie
burti ir vienādi, tāpēc ielikšana `%groups{ ... }` savāc tās zem vienas atslēgas.
Pēc pirmā cikla `say %groups` parāda visu struktūru — katru kanonisko atslēgu,
kas attēlota uz tās vārdu sarakstu:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Katra jaucējtabulas vērtība ir šīs grupas vārdu saraksts, izdrukāts alfabētiski
ar `.sort.join`.

{% include nav.html %}
