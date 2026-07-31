---
title: 'Soluzione: Raggruppate gli anagrammi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Output

```
act cat
dog
enlist listen silent
```

## Commenti

1. Ordinare le lettere di una parola dà una *chiave canonica*: tutti gli anagrammi
condividono le stesse lettere ordinate, quindi spingerli in `%groups{ ... }` li raccoglie
sotto un'unica chiave. Dopo il primo ciclo, `say %groups` mostra l'intera struttura — ogni
chiave canonica con la propria lista di parole:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Ogni valore dell'hash è la lista delle parole di quel gruppo, stampata in ordine
alfabetico con `.sort.join`.

{% include nav.html %}
