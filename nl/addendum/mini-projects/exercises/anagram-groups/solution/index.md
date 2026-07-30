---
title: 'Oplossing: Groepeer de anagrammen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

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

🦋 Je kunt de broncode vinden in het bestand [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Uitvoer

```
act cat
dog
enlist listen silent
```

## Opmerkingen

1. De letters van een woord sorteren geeft een *canonieke sleutel*: alle anagrammen delen dezelfde
gesorteerde letters, dus verzamelt op `%groups{ ... }` duwen ze onder één sleutel. Na
de eerste lus toont `say %groups` de hele structuur — elke canonieke sleutel
gekoppeld aan zijn lijst woorden:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Elke hashwaarde is de lijst woorden in die groep, alfabetisch afgedrukt met
`.sort.join`.

{% include nav.html %}
